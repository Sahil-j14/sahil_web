# 📸 How to add photos, videos & projects

Hi Sahil! Your whole website is controlled by **one file**:

```
src/lib/content.ts
```

Open it in any text editor. You only change the words between the `"quotes"`.
Save the file, and the website updates. That's it. You never need to touch the
design code.

---

## ➊ Add a new photo or video to the Gallery

**Step 1 — Add your file.**
Copy your photo or video into this folder:

```
public/media/
```

Example: `public/media/biped-walking.jpg` or `public/media/arm-test.mp4`

> 💡 Tip: rename files to be short and simple — no spaces. Use `-` instead.
> Good: `arm-test.mp4`   ·   Avoid: `WhatsApp Video 2026 (2).mp4`

**Step 2 — Tell the website about it.**
In `content.ts`, find the section labelled **`6. GALLERY`**.
Copy one of these blocks, paste it just below, and edit the details:

For a **photo**:
```ts
{
  type: "image",
  src: "/media/biped-walking.jpg",
  title: "Bipedal robot — first steps",
  caption: "Gait stabilisation test on the lab bench.",
},
```

For a **video**:
```ts
{
  type: "video",
  src: "/media/arm-test.mp4",
  title: "Arm — pick & place test",
  caption: "Repeating a recorded motion path.",
},
```

> ⚠️ Keep the commas and the `{ }` brackets exactly as shown.
> `src` is always `/media/` followed by your exact file name.

Save the file — your new photo/video appears in the Gallery, and clicking it
opens a full-size view.

---

## ➋ Add a new project

In `content.ts`, find the section **`3. PROJECTS`**.
Copy a whole `{ ... }` block, paste it at the top of the list (newest first),
and edit the text. To give a project its own photo/video, add a `media` block
inside it (same format as above).

---

## ➌ Update your name, intro, contact, or résumé

- Edit section **`1. WHO YOU ARE`** for your name, headline, email, phone, etc.
- To replace your **résumé PDF**: put the new file in `public/docs/` and update
  `resumeUrl` in section 1 to match the new file name.
- Edit section **`2. HEADLINE STATS`** for the big numbers near the top.

---

## ➍ See your changes & publish

- **Preview locally:** run `npm run dev`, then open http://localhost:3000
- **Publish online:** see `README.md` — one click with Vercel (free).

Any questions, just keep the structure of the existing blocks and you'll be fine. 🙂
