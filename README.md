# Athenaeum — Skill Exchange Ecosystem

A professional, minimal website for the Athenaeum peer learning collective.

## Stack
- **React 18** — functional components
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — subtle scroll & entrance animations
- **DM Sans** + **Cormorant Garamond** — typography pairing

## Color Palette (from logo)
| Token           | Value     | Usage                    |
|-----------------|-----------|--------------------------|
| `athen-black`   | `#0A0A0A` | Page background          |
| `athen-dark`    | `#111111` | Section backgrounds      |
| `athen-card`    | `#161616` | Card hover state         |
| `athen-border`  | `#2A2A2A` | All dividers & borders   |
| `athen-gray`    | `#888888` | Body text, labels        |
| `athen-cream`   | `#E8E4DC` | Primary text, headlines  |

---

## Local Development

```bash
npm install
npm start
# Opens at http://localhost:3000
```

## Build for Production

```bash
npm run build
# Output in /build directory
```

---

## Deploy to GitHub Pages

### Step 1 — Edit `package.json`
Set the `homepage` field to your GitHub Pages URL:
```json
"homepage": "https://<YOUR_USERNAME>.github.io/athenaeum"
```

### Step 2 — Install gh-pages (already in devDependencies)
```bash
npm install
```

### Step 3 — Deploy
```bash
npm run deploy
```

This runs `predeploy` (builds the project) then publishes the `/build` folder to the `gh-pages` branch.

### Step 4 — Configure GitHub Repository
1. Go to your GitHub repo → **Settings** → **Pages**
2. Set **Source** to `Deploy from a branch`
3. Select branch: `gh-pages` / root
4. Save — your site will be live at `https://<USERNAME>.github.io/athenaeum`

---

## Project Structure

```
athenaeum/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── ATHENAEUM.png       ← Place logo here
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Domains.jsx
│   │   ├── Sessions.jsx
│   │   ├── Team.jsx
│   │   ├── JoinCTA.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Customization Checklist
- [ ] Replace team member names, roles, and bios in `Team.jsx`
- [ ] Update email in `JoinCTA.jsx` and `Footer.jsx`
- [ ] Replace GitHub/LinkedIn URLs in `Footer.jsx`
- [ ] Add `ATHENAEUM.png` logo to `src/assets/`
- [ ] Update `homepage` in `package.json` with your GitHub username
