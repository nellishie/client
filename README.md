# Luminary Technology

This project is a React and Vite-powered business website built for a customer operations and consulting brand. It presents the company, its services, consulting capabilities, industries served, leadership team, and contact information in a fast, modern single-page application experience with routed pages.

Software Developers the CEOs of Luminary Technology:

- Nelson Ishmael Chinyere
- Tinashe Mapfumo

## Website Overview

The website is designed to showcase a professional BPO and consulting business with a polished visual style, responsive layouts, and media-driven sections. It includes:

- A home page with a hero section, service highlights, differentiators, results, and a call to action
- A services page covering inbound, outbound, back-office, and omnichannel support
- A consulting page focused on strategic guidance, process optimization, workforce management, and performance improvement
- An industries page describing the business sectors supported
- An about page introducing leadership and the broader consulting team
- A contact page for lead generation and client inquiries

## Technology Stack

- React
- Vite
- React Router
- Tailwind CSS
- Lucide React icons

## Project Structure

- [`src/pages`](c:/Users/Nelly%20nelly/Desktop/Projects/All%20Websites/client/src/pages) contains the main routed pages
- [`src/sections`](c:/Users/Nelly%20nelly/Desktop/Projects/All%20Websites/client/src/sections) contains reusable homepage sections such as the hero and CTA blocks
- [`src/components`](c:/Users/Nelly%20nelly/Desktop/Projects/All%20Websites/client/src/components) contains shared UI like the layout, navigation, footer, and forms
- [`src/assets`](c:/Users/Nelly%20nelly/Desktop/Projects/All%20Websites/client/src/assets) stores the website media assets
- [`src/styles`](c:/Users/Nelly%20nelly/Desktop/Projects/All%20Websites/client/src/styles) contains the main global stylesheet

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

For cPanel deployment, upload the contents of the [`dist`](c:/Users/Nelly%20nelly/Desktop/Projects/All%20Websites/client/dist) folder to `public_html`:

- `index.html`
- `assets/`
- `.htaccess`

Because the website uses React Router with browser history mode, the `.htaccess` file is needed so route refreshes such as `/about` or `/services` continue to load correctly.

## Performance Notes

The website media has been optimized to improve loading speed. Images are bundled through Vite, below-the-fold images use lazy loading, and the large MP4 asset has been compressed significantly to reduce page weight.
