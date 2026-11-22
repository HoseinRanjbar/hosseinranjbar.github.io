# Hossein Ranjbar — academic website

A lightweight personal academic website, ready for GitHub Pages. Built with HTML, CSS, and JavaScript; no installation, build step, or paid service is required.

## Publish on GitHub Pages

These instructions assume your account is `HoseinRanjbar`, as listed in your public research repositories. If you use a different account, substitute that username.

1. Create a **public** repository named `hoseinranjbar.github.io` on GitHub. If it already exists, check its contents before changing anything.
2. Extract `Hossein_Ranjbar_Website.zip`.
3. Upload the extracted **contents** to the repository root. `index.html` must be at the top level, alongside `style.css`, `script.js`, and the `assets` folder. Do not upload the ZIP itself or place the site inside an extra enclosing folder. Include `.nojekyll` if your upload method shows hidden files.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**, then **main** and **/ (root)**, and click **Save**.
6. Wait for the deployment to complete. GitHub will show the live address, normally `https://hoseinranjbar.github.io/`.

GitHub's current instructions:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

You can attach a domain you own later under **Settings → Pages → Custom domain**, following GitHub's DNS instructions. No domain has been purchased or configured for this draft.

## Edit your website

| File | What to change |
| --- | --- |
| `index.html` | Bio, affiliations, news, publications, research, personal interests, and profile links |
| `style.css` | Colors, fonts, spacing, and responsive layouts |
| `script.js` | Theme switch and navigation highlighting |
| `assets/hossein.jpg` | Profile photograph; replace with a new photo using the same filename |
| `assets/favicon.svg` | Browser tab icon |

To add a paper, duplicate one `<article class="paper">` block in `index.html`, then update its title, authors, venue, summary, links, and BibTeX. To add news, duplicate one `<div class="news-row">` block.

To add your CV, place `cv.pdf` inside `assets` and add `<a href="assets/cv.pdf">CV</a>` to the profile links. To add an email link, use `<a href="mailto:YOUR_EMAIL">Email</a>`. No guessed email address or CV file is included.

The paper illustrations are schematic illustrations, not figures from the papers. The profile photo is from your public UZH alumni profile. Bibliographic metadata was checked against public paper records, with the journal publication year (2025) used for the intra-inter gloss attention paper.

## Review before public launch

Review the bio, PhD start date, personal section, and public profile links. The text is an editable draft based on the background you previously provided. The site contains three selected sign language papers, not an exhaustive publication list.

## Preview locally

Open `index.html` in a browser, or serve this directory with `python3 -m http.server 8000` and visit `http://localhost:8000`. Theme persistence may depend on browser settings when opening a file directly.

Typography uses Google Fonts with local serif and sans-serif fallbacks. The page remains usable if Google Fonts cannot load. There is no analytics, backend, contact form, or account system. The chosen color theme is stored only in the visitor's browser.

## Content sources

- https://arxiv.org/abs/2503.12451
- https://doi.org/10.1109/ACCESS.2025.3574074
- https://arxiv.org/abs/2406.18333
- https://doi.org/10.1007/s11042-025-20721-5
- https://doi.org/10.1145/3742886.3756746
- https://github.com/HoseinRanjbar/CSLR-IIGA
- https://sltat2025.github.io/SLTAT2025-SessionsDetail.html
- https://www.cl.uzh.ch/de/about-us/alumni/hranjbar.html

The source checkout used for the private draft keeps the deployable website in `dist/`. The downloadable GitHub ZIP flattens that directory so its files are ready to upload directly into a GitHub Pages repository.
