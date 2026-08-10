# Shuchana Development Limited — Website

A static site for Shuchana Development Limited, a real estate developer working on
commercial and residential projects in **Dhaka, Mymensingh, and Feni, Bangladesh**.

Pages: `index.html` (home), `about.html`, `ongoing-projects.html` (available
flats/commercial spaces for sale), `projects.html` (completed work),
`contact.html` (inquiry form), `thank-you.html`, `404.html`.

No build step is required — it's plain HTML/CSS/JS and works directly on
GitHub Pages.

---

## 1. Put this on GitHub

If you don't already have a repo for this:

```bash
cd shuchana-website
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

(Create the empty repo on GitHub first at github.com/new — don't initialize it
with a README so the push above doesn't conflict.)

## 2. Turn on GitHub Pages

1. On GitHub, open the repo → **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to "Deploy from a branch".
3. Choose branch `main`, folder `/ (root)`, and save.
4. GitHub will give you a URL like `https://<your-username>.github.io/<repo-name>/`
   — it usually goes live within a minute or two.

If you'd rather use a custom domain (e.g. `shuchanadevelopment.com`), add it
under **Settings → Pages → Custom domain** and follow GitHub's DNS
instructions (an `A` record to GitHub's IPs, or a `CNAME` record if using a
subdomain).

## 3. Activate the inquiry form (one-time step)

The contact form on `contact.html` uses **[FormSubmit](https://formsubmit.co)**
to email submissions straight to `shuchana.development@gmail.com` — no
backend server needed, which is why it works on GitHub Pages.

**Important:** the first time anyone submits the form, FormSubmit sends a
confirmation email to `shuchana.development@gmail.com` with a "Confirm"
link. Until that link is clicked, submissions won't be delivered. So:

1. Once the site is live, submit a test inquiry yourself.
2. Check `shuchana.development@gmail.com` (including spam) for an email from
   FormSubmit and click **Confirm**.
3. After that, all future submissions go straight to that inbox, formatted
   as a simple table (name, email, phone, message, etc).

Notes on the form setup (in `contact.html`):
- `_captcha` is set to `true`, so FormSubmit shows a quick spam-prevention
  captcha before submissions go through. You can set it to `false` if you'd
  rather skip that, at the cost of more spam risk.
- A hidden honeypot field (`_honey`) is included to catch basic spam bots.
- After submitting, visitors are redirected to `thank-you.html`.
- FormSubmit's free tier is fine for this use case; see their site for
  limits if inquiry volume grows.

## 4. Replace placeholder content

Everything is written and clearly marked so you can find and replace it:

- **Ongoing Projects** (`ongoing-projects.html`, plus the "Available Now"
  preview on `index.html`): each card is a placeholder listing for a
  project currently open for booking — swap in the real project name,
  location, unit table (unit number, type, size, status), and the "X of Y
  units booked" progress bar. Real prices weren't provided, so the tables
  currently show size/status only — add a "Price" column to `<table
  class="unit-table">` if you want prices listed, or leave pricing to be
  handled by inquiry.
  Each card's **Send Inquiry** button links to `contact.html` with the
  project name, city, and space type in the URL (e.g.
  `contact.html?project=Shuchana+Riverside&city=Feni&type=Residential`) —
  `js/main.js` reads these and pre-fills the inquiry form automatically, so
  keep that link format if you duplicate a card.
- **Completed Projects** (`index.html` featured section + all of
  `projects.html`): each project card is a placeholder — swap in the real
  project name, location, description, and a photo. To add a photo, drop
  the image in `assets/images/` and replace the `<div
  class="placeholder-img">` block with an `<img
  src="assets/images/your-photo.jpg" alt="...">`.
- **About page** (`about.html`): replace the mission text and "Our
  Approach" copy with your company's actual story, history, and any
  licensing/registration info you want listed.
- **Contact info**: phone number isn't included anywhere yet since none was
  provided — add one in `contact.html` and the footer of each page if you'd
  like a phone number listed alongside the email.

## 5. Branding

- Logo files live in `assets/images/` — black and white versions of both
  the icon mark and full lockup are included (`logo-icon-black.png`,
  `logo-icon-white.png`, `logo-full-black.png`, `logo-full-white.png`),
  plus favicon sizes.
- Since your logo is monochrome, the site uses a warm off-white /
  near-black palette with a muted bronze accent (`--color-accent` in
  `css/style.css`). Adjust the CSS variables at the top of that file to
  change colors sitewide.
- Fonts are loaded from Google Fonts (Fraunces for headings, Inter for
  body text) via a CDN link in each page's `<head>`.

## 6. Local preview

To preview before pushing, run a simple local server from this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## File structure

```
shuchana-website/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── thank-you.html
├── 404.html
├── css/style.css
├── js/main.js
└── assets/images/   (logo variants, favicons)
```
