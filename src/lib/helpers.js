import React from "react";

// ─── Emoji Mode Context ───────────────────────────────────────────────────────
export const EmojiCtx = React.createContext(true);

// E(emoji, fallback) returns emoji when emojiMode is on, fallback when off.
export function E(emoji, fallback) {
  const emojiMode = React.useContext(EmojiCtx);
  return emojiMode ? emoji : fallback;
}

// ─── Password hashing ─────────────────────────────────────────────────────────
export async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

// Default password hash (for "pass123") — populated on module load
export let DEFAULT_HASH = "";
hashPassword("pass123").then(h => { DEFAULT_HASH = h; });

// ─── File accept type constants ───────────────────────────────────────────────
export const ACCEPT_IMAGES    = ["image/jpeg","image/png","image/gif","image/webp"].join(",");
export const ACCEPT_VIDEO     = ["video/mp4","video/webm","video/ogg","video/quicktime"].join(",");
export const ACCEPT_IMG_DOCS  = ACCEPT_IMAGES + ",.pdf,.doc,.docx";

// ─── Responsive hook ──────────────────────────────────────────────────────────
export function useWindowWidth() {
  const [w, setW] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handler = () => setW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return w;
}

// Returns responsive grid style object
export function rGrid(cols, gap = 14, mobileGap = 10) {
  const w = window.innerWidth;
  const isMobile = w <= 1024;
  const colMap = { 2:"1fr 1fr", 3:"1fr 1fr 1fr", 4:"1fr 1fr 1fr 1fr" };
  return {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : (colMap[cols] || `repeat(${cols},1fr)`),
    gap: isMobile ? mobileGap : gap,
  };
}

// ─── Training Expiry Helpers ──────────────────────────────────────────────────
export function addMonths(dateStr, months) {
  const d = new Date(dateStr);
  d.setMonth(d.getMonth() + months);
  return d;
}

export function getExpiryStatus(completionDate, renewalMonths) {
  if (!completionDate || !renewalMonths) return null;
  const expiry = addMonths(completionDate, renewalMonths);
  const today  = new Date();
  const daysLeft = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
  const expiryStr = expiry.toISOString().slice(0,10);
  if (daysLeft < 0)   return { expiryDate:expiryStr, daysLeft, status:"expired",  label:"Expired",               color:"#ef4444", bg:"rgba(239,68,68,0.15)"   };
  if (daysLeft <= 60) return { expiryDate:expiryStr, daysLeft, status:"expiring", label:`Expires in ${daysLeft}d`, color:"#f59e0b", bg:"rgba(245,158,11,0.15)"  };
  return                     { expiryDate:expiryStr, daysLeft, status:"valid",    label:`Valid until ${expiryStr}`, color:"#10b981", bg:"rgba(16,185,129,0.12)"  };
}
