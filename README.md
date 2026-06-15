# XenVault

A lightweight, clean personal finance tracker for small retailers to manually log daily sales and expenses.

## Overview
XenVault is built as a pure client-side static application. It features a modern, responsive landing page, an integrated modal-based login flow (supporting both standard email entry and Google OAuth Sign-In), a dark/light theme toggle, and a protected dashboard that visualizes transactions using Chart.js.

## Key Features
- **Integrated Login Modal**: Quick login directly on the homepage. Includes Google OAuth button integration.
- **Protected Dashboard**: Accessible only when logged in. Calculates and displays live totals (Income, Expense, Net Balance).
- **Interactive Visual Analytics**: Beautiful Doughnut (Income vs Expenses) and Line (Balance Timeline) charts powered by **Chart.js**.
- **Data Persistence**: Transactions and session information are saved locally using the browser's `localStorage`.
- **Theme Engine**: Complete light and dark mode support with automatic visual layout updates.
- **Clean Structure**: Extremely simple, comment-free vanilla JS, HTML5, and vanilla CSS codebases.

## Tech Stack
- **HTML5**: Clean semantic structures.
- **CSS3**: Core custom variables stylesheet (`css/style.css`) supporting light/dark theme schemes.
- **Vanilla JavaScript**: Lightweight modules for authorization, UI, and logic controls.
- **Chart.js**: Client-side rendering for responsive data charts.

## Project Structure
```text
XenVault/
├── assets/                  # Logos and static media assets
├── css/
│   └── style.css            # Centralized stylesheet (Light/Dark themes)
├── pages/                   # Application view documents
│   ├── about.html           # Centered developer profile and social links
│   ├── add_transaction.html # Record transaction entries
│   ├── dashboard.html       # Visual dashboard and history table
│   └── feedback.html        # Embedded user feedback iframe
├── scripts/                 # Functional script modules
│   ├── add_transaction.js   # Save entries to localStorage
│   ├── auth.js              # Session guards, modal controls, Google OAuth
│   ├── dashboard.js         # Totals calculations, Chart.js integrations
│   └── theme.js             # Client-side light/dark theme toggle
├── .env                     # Environmental config template
├── index.html               # Main landing page with login modal dialog
├── LICENSE                  # MIT License
└── README.md
```

## Running the Application
1. Double-click `index.html` (or run it via a local static server like Live Server) to open the application in your browser.
2. Click **Start tracking** or **Login** to open the login modal.
3. Sign in using any email address, or click the **Google Sign-In** button.
4. Input retail sales or operating expenses on the **Add Transaction** page, and watch your totals and Chart.js graphs update instantly!

## Security & Privacy
- **Privacy First**: Because there is no backend database, all transaction logs and profile names are saved in the client's local storage and never leave the device.
- **OAuth Safety**: Authenticates directly through Google's authorization popup. The client ID is a public identifier, and Google protects origin requests by checking whitelisted redirect URIs.
