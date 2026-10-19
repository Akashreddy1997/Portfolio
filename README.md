# Akash Reddy — Portfolio

Personal portfolio built with **React (JavaScript) + Vite**.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:5173

## Build for hosting
```
npm run build
```
The finished website is in the `dist` folder.

## Where to change things
| What | File |
|---|---|
| All text, links and service settings | `src/data/profile.js` |
| Colours, fonts, layout | `src/index.css` |
| Page sections | `src/components/*.jsx` |
| Resume download | `public/Akash_Reddy_Resume.pdf` |
| Link preview image (LinkedIn/WhatsApp) | `public/og-image.png` |
| Browser tab title / description | `index.html` |

---

## Setup checklist (all free)
Do these in order. Each one is switched on by filling **one value** in `src/data/profile.js`.

### 1. GitHub Pages — put the site online
1. Create a GitHub account (professional username, e.g. `akashreddy-dev`).
2. Create a **public** repository named exactly `<username>.github.io`.
3. Push this folder:
   ```
   git init -b main
   git add .
   git commit -m "Portfolio website"
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```
4. Repository **Settings → Pages → Source: GitHub Actions**. After ~2 minutes the site is live at `https://<username>.github.io`.
5. In `profile.js` set:
   - `profile.github: 'https://github.com/<username>'`
   - `site.url: 'https://<username>.github.io'`
   Then commit and push again (every push redeploys automatically).

### 2. Web3Forms — contact form to your Gmail
1. https://web3forms.com → create access key with your email.
2. In the form settings, set Website URL to your live address.
3. `profile.contactFormKey: '<key>'` → push → send yourself a test message (check Spam the first time).

### 3. Analytics — see who visits (pick ONE)
**GoatCounter** (simplest, privacy-friendly):
1. https://www.goatcounter.com → sign up → choose a code, e.g. `akashreddy`.
2. `site.goatcounter: 'akashreddy'` → push. Stats at `https://akashreddy.goatcounter.com`.

**Cloudflare Web Analytics** (alternative):
1. Cloudflare dashboard → Web Analytics → Add a site → enter your URL → copy the **token** from the JS snippet.
2. `site.cloudflareAnalyticsToken: '<token>'` → push.

Analytics only runs on the published site, never on `npm run dev`.

### 4. Google Search Console — appear on Google
1. https://search.google.com/search-console → Add property → **URL prefix** → your live URL.
2. Choose **HTML tag** verification → copy only the `content="..."` value.
3. `site.googleSiteVerification: '<value>'` → push → click **Verify** in Search Console.
4. Search Console → **Sitemaps** → submit `sitemap.xml` (created automatically once `site.url` is set).

### 5. Calendly — "Book a call" buttons
1. https://calendly.com → free account → create a **15-minute** event ("Intro call").
2. Copy the event link → `site.calendly: 'https://calendly.com/<you>/15min'` → push.
   Buttons appear in the hero, "At a glance", contact section and the Ctrl+K menu.

### 6. Credly — certification badges
When you earn a certification (e.g. AZ-204), Microsoft issues the badge on Credly.
Add it to `certifications` in `profile.js` with `link` (badge page) and `badgeImage` (right-click the badge → Copy image address).
The Credentials section appears automatically.

### After publishing
- Check the link preview: paste your URL into https://www.linkedin.com/post-inspector/
- Add the URL to your resume, LinkedIn (Contact info + Featured), Naukri and email signature.
