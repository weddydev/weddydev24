# Aarav & Meher — The Private Screening

A cinematic wedding invitation built with **React 19 + Tailwind CSS v4 + GSAP 3** (ScrollTrigger, SplitText, `@gsap/react`) and **Lenis** smooth scrolling.

```
npm install
npm run dev        # local development, http://localhost:5173
npm run build      # → dist/index.html + dist/generator.html (single-file, open by double-click)
```

---

## 1 · Re-brand in two minutes: `src/config.js`

Everything lives in one file: names, initials (monogram + wax seal), date, city, hashtag, colours, every event, the venue, gallery, travel notes, concierge, RSVP and music.

- **Formatting in titles:** `*word*` = gold italic, `~word~` = outlined. Example: `"The *Ceremony*"`.
- **Dates:** ISO with the venue's offset, e.g. `"2026-12-12T17:00:00+05:30"`. Guests always see venue-local times, wherever they are.
- **Colours:** `theme.gold`, `theme.accent` (burgundy; try emerald `#0f3b2e`), `theme.obsidian`, `theme.ivory`. They feed Tailwind's tokens at runtime.
- **Pass colour:** set an event's `style: "accent"` to print it in burgundy (the ceremony is).

## 2 · Replace the photos

Paste any image URL into `config.js` (`hero.image`, `story[].imageBack / imageFront`, `venue.image`, `gallery[].src`).

- **Unsplash** links are auto-sized for phones.
- **Your own photos:** put them in `public/photos/` and reference them as `"photos/hero.jpg"`.

Every image is colour-graded by CSS (`.grade` in `src/index.css`), so mixed photography still feels like one film. Use dark, warm, golden-hour shots. Portrait framing works best for the hero.

## 3 · Set up RSVP: `config.rsvp.method`

| method | what happens | setup |
|---|---|---|
| `"whatsapp"` (default) | Opens WhatsApp with a beautifully formatted reply | Set `rsvp.whatsapp` to the receiving number, digits only with country code |
| `"formspree"` | Posts JSON to your Formspree inbox | Create a form at formspree.io and paste `https://formspree.io/f/xxxx` into `endpoint` |
| `"google"` | Posts into a Google Form / Sheet | Paste the form's `…/formResponse` URL into `googleForm.action`, plus each field's `entry.123456` id (from "Get pre-filled link") |
| `"demo"` | No network, just the celebration | — |

## 4 · Personal guest links

Open **`generator.html`** (`dist/generator.html` after a build, or `/generator.html` on your live site).

1. Enter your live site address.
2. Paste guest names, one per line. Add a phone if you like: `Mr. and Mrs. Khanna | 919812345678`.
3. For each guest, use **Copy link**, **Copy message** or **WhatsApp**. You can also export everything as a CSV.

Links look like `index.html?guest=Mr.%20and%20Mrs.%20Khanna`. The guest's name then appears on:
- the envelope
- the hero ("Reserved for…")
- the prologue letter
- every VIP pass, plus a unique barcode
- the RSVP form, prefilled
- the concierge WhatsApp message

## 5 · Music

Sound is muted until the guest taps the gold button. With no music file, a generative ambient score plays.

To use your own track, drop an mp3 at `public/assets/audio/theme.mp3` and set `music.src: "assets/audio/theme.mp3"`.

## 6 · Deploy

`npm run build` and upload the **`dist/`** folder. Each page is a single self-contained HTML file.

- **Netlify:** drag `dist/` onto app.netlify.com/drop. Or connect the repo with build command `npm run build` and publish directory `dist`.
- **Vercel:** import the repo. It auto-detects Vite and builds to `dist`.

**After deploying, update the share preview in `index.html` `<head>`.** WhatsApp doesn't run JavaScript, so:
- make `og:image` / `twitter:image` absolute, e.g. `https://your-site.netlify.app/og-image.jpg`
- update the title and description if names or dates change
- put the live URL in `config.siteUrl` (the generator uses it)

## Structure

```
src/config.js            ← the only file most edits need
src/index.css            Tailwind v4 theme tokens + art-directed components
src/App.jsx              stage machine: title → doors → envelope → film
src/intro/               Preloader (monogram, doors) · Envelope (seal, flap, card)
src/sections/            Hero · Prologue · Story · Countdown · Events · Venue · Gallery · Travel · Rsvp · Finale
src/components/          Monogram, WaxSeal, Button, Reveal/Lines (SplitText), Chrome (cursor, menu, sound), hooks
src/lib/                 gsap setup, Lenis + curtain nav, audio engine, canvas FX, .ics calendar, utils
src/generator/           guest-link atelier
public/                  favicon, apple-touch-icon, og-image (1200×630)
```

**Accessibility & performance:**
- `prefers-reduced-motion` skips the envelope, particles and parallax.
- Canvases cap pixel density, thin out on phones, and pause off-screen.
- The map iframe and the photos below the fold load lazily.
