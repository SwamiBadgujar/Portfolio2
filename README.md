# Swami Badgujar — Portfolio

A dark-themed developer portfolio built with **React** + **Tailwind CSS**, originally generated via [Emergent](https://app.emergent.sh).

## Tech Stack

- React 18
- Tailwind CSS v3
- Lucide React (icons)
- JetBrains Mono + Space Grotesk + Inter (Google Fonts)

## Project Structure

```
src/
├── App.jsx               # Root component — assembles all sections
├── App.css               # App-level styles
├── index.js              # React entry point
├── index.css             # Global styles, Tailwind directives, animations
├── mock.js               # All portfolio data (profile, skills, projects…)
└── components/
    ├── Header.jsx        # Sticky nav with mobile menu
    ├── Hero.jsx          # Full-screen hero with particle canvas + 3D cube
    ├── About.jsx         # Bio + stats + terminal card
    ├── Skills.jsx        # Skill groups + currently-learning + marquee
    ├── Experience.jsx    # Timeline of work experience
    ├── Projects.jsx      # Project cards with tilt effect
    ├── Certifications.jsx
    ├── Education.jsx
    ├── Contact.jsx       # Contact cards + social links
    └── Footer.jsx
```

## Getting Started

```bash
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build
```

## Customisation

All content lives in **`src/mock.js`**. Update:
- `profile` — name, email, phone, social links, tagline
- `skills` / `learning`
- `experience`
- `projects` (swap `image` URLs or import local assets)
- `certifications`
- `education`
- `navLinks`

## Notes

- The `resumeUrl` in `mock.js` is a placeholder (`#`). Replace it with your actual PDF link.
- GitHub / LinkedIn `href` values in `profile` are also `#` placeholders — fill in your real URLs.
