# 🐰 Binnie Clinic

A cute, STAY-coded period & cycle diary — made for Stray Kids fans, named after Seo Changbin.

**Live app:** [binnie-clinic.vercel.app](https://binnie-clinic.vercel.app/)

---

## What it does

Binnie Clinic is a lightweight period-tracking web app with a Stray Kids twist. No sign-up, no backend, no ads — everything is stored locally on your own device.

- 📅 **Log entries** — period start date, period length, cycle length, mood, symptoms, and notes
- 🔮 **Cycle prediction** — estimates your next period based on your last logged entry
- 📊 **Stats** — entries logged, average cycle length, most common mood
- 🩺 **Dr. Binnie's Corner** — a rotating deck of gentle, SKZ-flavored self-care tips
- 🌸 **Self-care tips** — period comfort tips with a Stray Kids spin
- 💌 **Ship Match mini-game** — drag member bubbles together and see who's meant to be
- 🌓 **Light/dark mode**
- 🎨 **Background picker** — choose from Classic, Piggy, Bunny, Binnie, or Puppy wallpapers
- 👋 **Personal greeting** — the app takes your name and greets you around the site
- 📖 **Help modal** — a no-pressure explainer on periods, cycles, and when to see a doctor
- 📲 **Installable PWA** — works offline once installed, with automatic update prompts when a new version ships

## Tech stack

Just one HTML file, one CSS block, and vanilla JS — no build step, no framework, no dependencies.

- HTML / CSS / JavaScript
- `localStorage` for all data (entries, name, theme — nothing ever leaves your device)
- Service worker for offline support + PWA installability
- Hosted on [Vercel](https://vercel.com)

## Running it locally

Since there's no build step, you just need to serve the folder:

```bash
git clone https://github.com/CodeRedme/binnie-clinic.git
cd binnie-clinic
npx serve .
```

Then open the local URL it gives you. (Opening `index.html` directly as a `file://` won't register the service worker — serve it over `http://` or `https://`.)

## Installing as an app

Visit [binnie-clinic.vercel.app](https://binnie-clinic.vercel.app/) on your phone or desktop and use your browser's "Install app" / "Add to Home Screen" option. Once installed, it works offline and takes up about 269 KB of storage.

## Versioning & updates

Every deploy bumps the cache version in `sw.js` (`CACHE_NAME`) and the version tag in `index.html` (`APP_VERSION`). When you have an older cached version open and a new one ships, you'll see an "Update now" banner — tap it to refresh to the latest version.

Current version: **v1.5.0**

## Disclaimer

This is a fan-made project and is **not affiliated with, endorsed by, or connected to JYP Entertainment or Stray Kids** in any way. Health information in the app is general guidance, not medical advice — for anything that worries you, please see a doctor or gynecologist.

## Credits

Created by **Tulika Soni** ([@minberrydiary](https://instagram.com/minberrydiary)) 🌷 × STAY project 💗

© 2026 Binnie Clinic
