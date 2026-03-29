# Premium React Portfolio

This is a premium, top 1% developer portfolio built with a state-of-the-art tech stack. It transitions a previous static HTML configuration into a dynamic, animated, highly performant React application with Firebase configuration handling.

## 🚀 Tech Stack

- **Frontend:** React 18, Vite
- **Styling:** Tailwind CSS (with Glassmorphic Dark Mode design system)
- **Animations:** Framer Motion (Scroll reveals, staggered content, cursor trailing)
- **Icons:** Lucide React
- **Backend/Config:** Firebase (Ready for db/auth extensions via `.env`)

## ⚙️ Setup Instructions

### 1. Install Dependencies
Run the following inside the root directory to fetch all required NPM packages:
```bash
npm install
```

### 2. Configure Environment Variables
Copy the `.env.example` template into a new `.env` file (these variables are excluded via `.gitignore` to prevent secret leaking):

```bash
cp .env.example .env
```
Update `.env` with your precise Firebase configurations obtained from your Firebase Console. 
Note: The application uses `VITE_` prefixes so they are exposed safely to Vite during build.

### 3. Start Development Server
Begin local development by running:
```bash
npm run dev
```

### 4. Build for Production
To bundle and optimize the application for a hosting platform like Vercel, Netlify, or Firebase Hosting:
```bash
npm run build
```

## ✨ Features Included

- **Premium Architectural Design:** Emulates clean, modern aesthetics used by top tech companies (Stripe, Linear, Vercel).
- **Interactive Cursor Array:** Physical responsive cursor that follows user movements and reacts to hovering over action items.
- **Eye-Tracking Hero Section:** A unique interactive SVG/CSS construct that follows the user's cursor dynamically.
- **Dynamic Backgrounds:** Intersecting dark-theme glassmorphism and animated, blurred blob color fields.
- **User Preference Toggles:** Instantly change Themes (Dark/Light), toggle heavy Animations to alleviate motion sickness, and toggle Cursor Interactions off/on depending on preference.
- **Secure Architecture:** Complete structural support for environment variables and clean Firebase setup.
