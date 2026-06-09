# XenVault

A small responsive frontend application for retailers to manually track sales and expenses.

## Overview
This project provides a simple three-page structure in the `pages/` directory:

- `pages/index.html` — landing page with app overview and navigation
- `pages/login.html` — login page for user authentication
- `pages/dashboard.html` — dashboard page with transaction tracking, summary totals, and history

The app uses simple semantic HTML, shared CSS in `css/style.css`, and vanilla JavaScript in `scripts/`.

## Tech Stack
- **HTML5:** Semantic structure with `header`, `main`, `section`, `form`, `fieldset`, and `ul`
- **CSS3:** Shared stylesheet using CSS Grid and Flexbox for responsive layout
- **JavaScript:** Basic vanilla scripts for login and dashboard transaction tracking

## Project Structure
```text
XenVault/
├── assets/           # Static media and logos
├── css/
│   └── style.css     # Shared styles for all pages
├── pages/            # HTML page files
│   ├── dashboard.html
│   ├── index.html
│   └── login.html
├── scripts/
│   ├── auth.js       # Login form behavior and session setup
│   └── dashboard.js  # Dashboard tracking logic and protected route behavior
└── README.md
```

## Running the App
Open `pages/index.html` in your browser to view the landing page. From there, use the login link to reach `pages/login.html` and then access `pages/dashboard.html`.

## Notes
- The dashboard uses local storage to simulate a login session.
- Transaction history and totals reset when the page is refreshed.
- The page structure is intentionally simple and beginner-friendly.

