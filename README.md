# gavin14gs

Website created for my friend for him to sell and display clothes. If you would like to view it, view it on https://gavin14gs.pages.dev/

Gavin14gs Website Overview
Tech Stack:

React (modular UI components)

Vite (fast build tool and dev server)

Cloudflare Pages (static site hosting)

Discord Webhook (contact form integration)

Minimalist CSS (inline styles, black theme)

JSON data files (for clothing items)

Structure:

components — Reusable UI components (Header, Footer, ClothingList, ContactForm, etc.)

pages — Main pages (Home, Sell, Archive, Contact)

data — JSON files for clothes for sale and archive

public — Static assets (images, favicon)

index.html — Main HTML entry point

vite.config.js — Vite configuration

How to Edit or Extend

Clone the repository:
git clone https://github.com/ttop-stack/gavin14gs.git
cd gavin14gs
Install dependencies:
npm install
Run locally:
npm run dev
Visit http://localhost:5173 in your browser.

Edit content

Pages: Modify files in pages (e.g., Home.jsx, Sell.jsx)

Components: Update or add new UI in components

Clothing Data: Edit clothesForSale.json and clothesArchive.json

Images: Add images to images

Contact Form: Update Discord webhook or form logic in ContactForm.jsx

Change styles/theme:

Edit inline styles in components or add a CSS file for global styles.

Build for production:

npm run build
Deploy the dist folder to Cloudflare Pages.

Modularity:
Each page/component is a black box—edit or replace any module without affecting others.
All data flows through simple, documented interfaces for easy maintenance and extension.

Anyone familiar with React and basic web development can quickly understand, edit, or extend this site!
