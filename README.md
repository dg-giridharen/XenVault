# XenVault

A lightweight frontend app for small retailers to manually track daily sales and expenses.

## Overview
This project includes a landing page, a login flow, and a dashboard for adding income and expense transactions.

- `index.html` — landing page with product overview and entry point
- `pages/login.html` — login page that saves a session key in local storage
- `pages/dashboard.html` — protected dashboard showing totals and transaction history

The app uses Tailwind CSS via CDN, a shared stylesheet in `css/style.css`, and vanilla JavaScript in `scripts/`.

## Features
- Landing page with clear call-to-action
- Simple email/password login form
- Local storage session handling for dashboard access
- Add income and expenses with live totals
- Transaction history list updates instantly
- Logout support with session cleanup

## Tech Stack
- **HTML5:** Clean semantic page structure and accessible forms
- **CSS3:** Shared styling plus Tailwind utility classes for responsive layout
- **JavaScript:** Vanilla scripts for login, session guard, and transaction state

## Project Structure
```text
XenVault/
├── assets/             # Static media and logos
├── css/
│   └── style.css       # Shared styles for all pages
├── pages/              # Login and dashboard views
│   ├── dashboard.html
│   └── login.html
├── scripts/
│   ├── auth.js         # Login behavior and session setup
│   └── dashboard.js    # Dashboard logic and protected route guard
├── index.html          # Landing page
└── README.md
```

## Running the App
1. Open `index.html` in your browser.
2. Click **Start tracking** to go to `pages/login.html`.
3. Enter any email and password to sign in.
4. Use the dashboard at `pages/dashboard.html` to add transactions.

## Notes
- The dashboard is protected by a simple local storage session token.
- Totals and transaction items are stored in memory only and reset when the page reloads.
- This app is designed as a simple demo and starter UI for retail tracking.

