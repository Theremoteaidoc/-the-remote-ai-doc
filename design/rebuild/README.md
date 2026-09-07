# seascope.tech rebuild — stage assets (7 Sep 2026)
Founder-approved design pass (Superdesign project d2bb03e8). `design-system.md` is the token/component source of truth ("clinical daylight": white, #F6F5F1 bands, teal #14B8A6 accent, Noto Serif Display + Noto Sans, light theme only).
`drafts/*.html` are the approved page drafts (reference for structure and copy, not production code; image URLs point at the design canvas and must be swapped for `/rebuild/images/*.webp`).
`public/rebuild/images/` photographs (Gemini, founder-approved: Filipino crew, cargo vessels). `public/rebuild/video/` header loop (6 s, silent, 2 MB) + 30 s introduction + poster, cut from the founder's own footage.
Rules: outcome not mechanism (scripts/check-mechanism.mjs), no client or lead names (scripts/check-names.mjs), no pilot language, no em-dashes, Lighthouse mobile >= 80, prefers-reduced-motion respected.

**Internal only:** `design/rebuild/internal-video/` holds the 30 s cut from the 2025 footage (actors with invented doctor names). Never copy it under `public/`; it must not be served.

**Brand mark (founder ruling 7 Sep evening):** the wordmark uses the SeaScope compass-cross mark `public/rebuild/brand/seascope-mark.png` (transparent), NOT the Asclepius S from demos/brand/mark. "Sea" ink + "Scope" teal text stays.
