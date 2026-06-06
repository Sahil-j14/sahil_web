# Sahil Jambavalikar — Portfolio

A robotics-focused portfolio website. Dark "control-room" aesthetic with a
blueprint grid, live video feeds, and a fully editable content system.

Built with **Next.js + Tailwind CSS + Framer Motion**.

---

## ✍️ Adding your photos, videos & projects

You don't need to know how to code. Everything lives in one file and there's a
plain-English guide:

➡️ **See [`HOW-TO-ADD-CONTENT.md`](./HOW-TO-ADD-CONTENT.md)**

Quick version: edit `src/lib/content.ts`, drop media files into `public/media/`.

---

## 💻 Run it on your computer

You need [Node.js](https://nodejs.org) installed (version 20+).

```bash
npm install      # first time only
npm run dev      # start the site
```

Then open **http://localhost:3000** in your browser. Edits update live.

---

## 🚀 Publish it online (free)

The easiest way is **[Vercel](https://vercel.com)** (made by the creators of Next.js):

1. Push this folder to a free [GitHub](https://github.com) repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New → Project**.
3. Select this repository and click **Deploy**. Done — you get a live URL.

After that, every time you change `content.ts` and push to GitHub, the site
updates automatically. You can also connect a custom domain in Vercel's settings.

> Alternatively, run `npm run build` to produce a production build locally.

---

## 📁 Project map

```
public/
  media/   ← your photos & videos go here
  docs/    ← your résumé PDF
src/
  lib/content.ts        ← ⭐ ALL your content (the only file you edit)
  app/                  ← page + global styles
  components/           ← the design (Hero, Projects, Gallery, etc.)
```
