// ─── Supabase Configuration ───────────────────────────────────────────────────
// Replace these two values with your own from:
// Supabase Dashboard → Project Settings → API
export const SUPABASE_URL  = "https://aoahugfyswgcisfiosyn.supabase.co";
export const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvYWh1Z2Z5c3dnY2lzZmlvc3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5NjY1NzMsImV4cCI6MjA5NTU0MjU3M30.9mlm3pVxqwTgCdrdVF2ek1mBHro28P-MTaVjdAUvCIs";

// Lightweight Supabase client — no npm package needed
export const sb = (() => {
  const h = { "Content-Type": "application/json", "apikey": SUPABASE_ANON, "Authorization": `Bearer ${SUPABASE_ANON}` };
  const rest = (table) => `${SUPABASE_URL}/rest/v1/${table}`;
  const q = async (method, table, opts = {}) => {
    const { filter, body, upsertOn } = opts;
    let url = rest(table);
    const filters = [];
    if (filter) filters.push(filter);
    if (method === "POST" && upsertOn) filters.push(`on_conflict=${encodeURIComponent(upsertOn)}`);
    if (filters.length) url += "?" + filters.join("&");
    const headers = { ...h };
    if (method === "POST" && upsertOn) headers["Prefer"] = "resolution=merge-duplicates,return=minimal";
    else if (method === "POST") headers["Prefer"] = "return=minimal";
    const res = await fetch(url, { method, headers, ...(body ? { body: JSON.stringify(body) } : {}) });
    if (method === "GET") { const d = await res.json(); return { data: d, error: null }; }
    return { data: null, error: res.ok ? null : await res.text() };
  };
  const from = (table) => ({
    select: (cols = "*") => {
      const base = { filter: `select=${cols}` };
      const promise = q("GET", table, base);
      promise.eq  = (col, val) => q("GET", table, { filter: `select=${cols}&${col}=eq.${encodeURIComponent(val)}` });
      promise.neq = (col, val) => q("GET", table, { filter: `select=${cols}&${col}=neq.${encodeURIComponent(val)}` });
      return promise;
    },
    insert: (rows) => q("POST", table, { body: Array.isArray(rows) ? rows : [rows] }),
    upsert: (rows, opts = {}) => q("POST", table, { body: Array.isArray(rows) ? rows : [rows], upsertOn: opts.onConflict }),
    delete: () => ({
      eq:     (col, val) => q("DELETE", table, { filter: `${col}=eq.${encodeURIComponent(val)}` }),
      neq:    (col, val) => q("DELETE", table, { filter: `${col}=neq.${encodeURIComponent(val)}` }),
      gte:    (col, val) => q("DELETE", table, { filter: `${col}=gte.${encodeURIComponent(val)}` }),
      all:    ()         => q("DELETE", table, { filter: `id=gte.0` }),
      match:  (conditions) => q("DELETE", table, { filter: Object.entries(conditions).map(([k,v])=>`${k}=eq.${encodeURIComponent(v)}`).join("&") }),
    }),
  });
  const storage = {
    upload: async (bucket, path, file) => {
      const contentType = file.type && file.type !== "" ? file.type : "application/octet-stream";
      const encodedPath = path.split('/').map(encodeURIComponent).join('/');
      const res = await fetch(`${SUPABASE_URL}/storage/v1/object/${bucket}/${encodedPath}`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_ANON,
          "Authorization": `Bearer ${SUPABASE_ANON}`,
          "Content-Type": contentType,
          "x-upsert": "true",
          "Cache-Control": "3600",
        },
        body: file,
      });
      const text = await res.text();
      if (!res.ok) console.error("Storage upload error:", res.status, text);
      return { error: res.ok ? null : text };
    },
    remove: async (bucket, paths) => {
      const res = await fetch(`${SUPABASE_URL}/storage/v1/object/${bucket}`, {
        method: "DELETE",
        headers: { "apikey": SUPABASE_ANON, "Authorization": `Bearer ${SUPABASE_ANON}`, "Content-Type": "application/json" },
        body: JSON.stringify({ prefixes: paths }),
      });
      return { error: res.ok ? null : await res.text() };
    },
    getPublicUrl: (bucket, path) => `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${path.split('/').map(encodeURIComponent).join('/')}`,
  };
  return { from, storage };
})();
