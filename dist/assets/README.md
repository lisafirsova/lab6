# /public/assets

This is where the lab's required `/assets` folder lives. The project
currently draws every illustration (hero banner, character, cat, moon,
medals) as inline SVG/CSS so the app has zero external image dependencies
and nothing to break if a file is missing.

If you have the real Crave artwork (the painted fantasy-village hero image,
the jumping-character illustration, the cat-in-the-window achievement art,
the user avatar), drop the files here and swap the matching CSS
background/`<img>` in:

- `src/pages/LandingPage.jsx` — hero banner + "Crave — это..." art panel
- `src/pages/DashboardPage.jsx` — hero banner, cat card, avatar
