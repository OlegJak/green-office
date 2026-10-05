# Green Office

**Live site:** https://olegjak.github.io/green-office/

Landing page and shop for an office-greening company in Estonia: plant catalog with details dialog, cart page and checkout form. Glassmorphism design over a fern background.

- Languages: English (default), Estonian, Russian. The switcher is in the header; the choice is remembered. A language can be forced with `?lang=et` / `?lang=ru`.
- Prices in euros, phone numbers in the Estonian format (+372).
- The cart is stored in the browser (`localStorage`) and shared between the pages.
- Plain HTML/CSS/JS, no build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 5173
```

and open http://localhost:5173.

## Updating the live site

Every push to `main` is published by GitHub Pages within a minute or two. Pages lets browsers cache files for 10 minutes, so CSS and JS are linked with a version (`styles.css?v=2026100502`). When you change `styles.css` or anything in `js/`, bump that number in both `index.html` and `cart.html` so visitors get the new files right away.

## Structure

| Path | What |
|---|---|
| `index.html` | Home: hero, about, reasons, catalog, contact form |
| `cart.html` | Cart page with checkout |
| `styles.css` | All styles |
| `js/data.js` | Plants: prices, photos, texts in three languages |
| `js/i18n.js` | UI strings in three languages and the language switch |
| `js/common.js` | Shared: cart store, header, mobile menu, toast, phone mask, scroll reveal |
| `js/home.js` | Catalog, plant dialog, contact form |
| `js/cart.js` | Cart page |
| `img/` | Background, photos, favicon |

## Not done yet

The contact and order forms only show a confirmation in the browser; nothing is sent anywhere. Connect them to email, a Telegram bot or a CRM before going live.
