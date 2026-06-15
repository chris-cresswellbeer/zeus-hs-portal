# Zeus Protect — Vite Migration Guide

## What this scaffold does

Extracts ~3,200 lines of lib/seed code into proper ES modules, leaving a
single `App.jsx` that holds all component functions (still one file for now,
which is safe and fully reversible).

```
src/
├── main.jsx                    # ReactDOM.createRoot only
├── App.jsx                     # ← paste your component code here
├── lib/
│   ├── supabase.js             # sb client + SUPABASE_URL/ANON
│   ├── theme.js                # Z, Z_LIGHT … Z_ROSE, getThemeTokens, ALL_THEMES
│   └── helpers.js              # EmojiCtx, E(), hashPassword, DEFAULT_HASH,
│                               # ACCEPT_*, useWindowWidth, rGrid,
│                               # addMonths, getExpiryStatus
└── data/
    ├── index.js                # barrel re-export
    ├── seedStaff.js            # USERS
    ├── seedModules.js          # TRAINING_MODULES, HS_DOCS, INIT_ASSIGN, INIT_COMPLETE
    ├── incidentConstants.js    # INCIDENT_TYPES, ACCIDENT_CODES, NUMBER_CODES,
    │                           # INJURY_TYPES, INIT_INCIDENTS
    ├── seedDse.js              # makeDseReport, INIT_DSE_REPORTS
    ├── seedRiskAssessments.js  # INIT_RAS
    ├── seedMachinery.js        # INIT_MACHINE_COMPS
    ├── seedInvestigations.js   # INIT_INVESTIGATIONS
    ├── seedEquipment.js        # INIT_EQUIPMENT
    ├── seedInspections.js      # INIT_SITE_INSPECTIONS
    └── seedFireSafety.js       # INIT_FIRE_WARDENS … INIT_FRA_REVIEWS
```

---

## Step 1 — Copy files into StackBlitz

1. Create a new **Vite + React** project in StackBlitz.
2. Replace its default files with the ones from this scaffold.
3. Run `npm install`.

---

## Step 2 — Update your credentials

Open `src/lib/supabase.js` and replace:

```js
export const SUPABASE_URL  = "https://YOUR_PROJECT_ID.supabase.co";
export const SUPABASE_ANON = "YOUR_ANON_PUBLIC_KEY";
```

with your real values (same as they were in the old file).

---

## Step 3 — Paste your component code into App.jsx

Open your old single file. Find **line 920** (starts with `const ZEUS_LOGO_SRC`).

Copy everything from line 920 to the end of the file.

Paste it into `src/App.jsx` below the comment:
```
// TODO: paste component code here
```

Then **delete** the pasted lines that are now duplicated by imports:
- `import React …` at the very top (the old one)
- The `sb` IIFE block (lines ~19–85 in old file)
- `const EmojiCtx` / `function E()`
- `async function hashPassword` / `let DEFAULT_HASH`
- `const ACCEPT_IMAGES/VIDEO/IMG_DOCS`
- `function useWindowWidth` / `function rGrid`
- `function MobileCard` / `function MobileCardRow` — **keep these**, they are
  components used in the app, not lib utilities
- `const Z = {…}` through `function getThemeTokens()`
- All `const USERS`, `const TRAINING_MODULES`, `const HS_DOCS`, `const INIT_*`
  blocks
- `function addMonths` / `function getExpiryStatus`

> **Tip:** search for `// ─── Fake Data` — delete from there to just before
> `// ─── Training Expiry Helpers`, then separately delete the theme tokens
> and sb client blocks.

---

## Step 4 — Verify it runs

In StackBlitz terminal:
```
npm run dev
```

Open the preview. Login should work as before. Check the browser console for
any `is not defined` errors — these mean a name was deleted from App.jsx but
not yet imported. Add the missing name to the appropriate import in App.jsx.

---

## Step 5 — Commit and deploy

Push to GitHub. Netlify will auto-build via `npm run build`.

In your Netlify site settings, set:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

## After this migration

Lines saved in App.jsx: ~3,200 (from ~17,890 to ~14,700).

**Next recommended splits (do one at a time, commit after each):**

| Priority | Module | Est. lines |
|---|---|---|
| Low-risk | `components/contractors/` | ~750 |
| Low-risk | `components/permits/` | ~400 |
| Low-risk | `components/coshh/` | ~500 |
| Medium | `components/incidents/` | ~1,800 |
| Medium | `components/reports/` | ~1,200 |
| Last | `App.jsx` state + routing | ~800 |

Each split follows the same pattern:
1. Create `src/components/featureName/index.jsx`
2. Cut the component function(s) from App.jsx and paste in
3. Add `export` keyword
4. Add import in App.jsx
5. Test in browser, commit

---

## Known gotchas

- `MobileCard` / `MobileCardRow` are JSX components — they stay in App.jsx
  (or move to `components/shared/`) rather than `lib/helpers.js`
- `DEFAULT_HASH` is a `let` that gets assigned asynchronously at module load.
  If you ever see password checks failing on first load, this is why — same
  behaviour as before, just now in a separate file.
- The `sb` client uses `SUPABASE_ANON` at module evaluation time, so changing
  credentials requires a rebuild/page refresh.
