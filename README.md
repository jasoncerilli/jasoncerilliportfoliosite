# ☁️ AWS Cloud Engineer Portfolio

A modern, responsive personal portfolio website built for AWS Cloud Engineers. Features a dark cyber/cloud aesthetic with smooth animations, glassmorphism UI, and a particle network background.

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + Vite | Frontend framework & build tool |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icon library |
| Netlify | Hosting & form handling |

## ✨ Features

- **Dark mode by default** with electric blue, cyan, purple, and orange accents
- **Animated particle/network background** (canvas-based)
- **Terminal-style intro** with typewriter animation
- **Smooth scroll navigation** with active section tracking
- **Glassmorphism cards** with hover effects
- **Project filtering** by technology category
- **Contact form** ready for Netlify Forms or Formspree
- **Loading screen** animation
- **Back-to-top button**
- **Theme toggle** (dark/light)
- **Mobile hamburger menu**
- **SEO meta tags** + Open Graph
- **Accessible** (ARIA labels, semantic HTML, keyboard navigation)
- **Performance optimized** (code splitting, lazy loading)

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx          # About me section
│   │   ├── BackToTop.jsx      # Floating back-to-top button
│   │   ├── Contact.jsx        # Contact form + social links
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Hero.jsx           # Full-screen hero section
│   │   ├── LoadingScreen.jsx  # Initial loading animation
│   │   ├── Navbar.jsx         # Sticky transparent navbar
│   │   ├── ParticleBackground.jsx  # Canvas particle animation
│   │   ├── Projects.jsx       # Filterable project cards
│   │   └── Skills.jsx         # Skills with progress bars
│   ├── data/
│   │   ├── projects.js        # Project data (customize here)
│   │   └── skills.js          # Skills & stats data (customize here)
│   ├── App.jsx                # Root component
│   ├── index.css              # Global styles + Tailwind
│   └── main.jsx               # Entry point
├── index.html                 # HTML template + SEO meta tags
├── netlify.toml               # Netlify deployment config
├── tailwind.config.js         # Tailwind theme customization
├── vite.config.js             # Vite build config
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

The output will be in the `dist/` folder.

### 4. Preview production build

```bash
npm run preview
```

---

## ✏️ Customization Guide

All customization points are marked with `// CUSTOMIZE:` comments in the code.

### Personal Information

**`src/components/Hero.jsx`**
- Replace `"Your Name"` with your actual name
- Update the tagline to reflect your specialty
- Update the resume link (`href="/resume.pdf"`)

**`src/components/About.jsx`**
- Replace the bio paragraphs with your own professional summary
- Update the "Quick Facts" grid (location, experience, certifications, etc.)
- Update the AWS certifications section

**`src/components/Navbar.jsx`**
- Replace `"YourName.cloud"` with your brand/name

**`src/components/LoadingScreen.jsx`**
- Replace `"Your Name"` with your actual name

**`src/components/Footer.jsx`**
- Replace `"Your Name"` and `"YourName.cloud"` with your info

### Projects

**`src/data/projects.js`**
- Update each project's `title`, `description`, `tags`, `github`, and `demo` fields
- Add or remove projects as needed
- Update the `categories` array if you add new categories

### Skills

**`src/data/skills.js`**
- Update skill `level` values (0-100) to reflect your actual proficiency
- Add or remove skills from each category
- Update the `stats` array with your real numbers

### Social Links & Contact

**`src/components/Contact.jsx`**
- Update `socialLinks` with your LinkedIn, GitHub, and email
- Update location and timezone

**`src/components/Footer.jsx`**
- Update `socialLinks` with your profiles

### SEO

**`index.html`**
- Update `<title>`, `<meta name="description">`, `og:url`, `og:image`
- Replace `"Your Name"` throughout

---

## 🌐 Deployment to Netlify

### Option 1: Netlify CLI (Recommended)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy (builds automatically)
netlify deploy --prod
```

### Option 2: Netlify Dashboard (Drag & Drop)

1. Run `npm run build`
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag the `dist/` folder onto the Netlify dashboard

### Option 3: Git Integration (Best for ongoing updates)

1. Push your code to GitHub/GitLab
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project"
3. Connect your repository
4. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

### Contact Form Setup

The contact form uses **Netlify Forms** by default (works automatically when deployed to Netlify).

To use **Formspree** instead:
1. Create an account at [formspree.io](https://formspree.io)
2. Create a new form and copy your form ID
3. In `src/components/Contact.jsx`, replace the fetch URL:
   ```js
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   });
   ```

---

## 🎨 Color Palette

| Color | Hex | Usage |
|---|---|---|
| Electric Blue | `#0ea5e9` | Primary accent, links, CTAs |
| Cyber Cyan | `#06b6d4` | Secondary accent, gradients |
| Neon Purple | `#a855f7` | Highlights, gradients |
| Cloud Orange | `#f97316` | AWS-themed accents |
| Dark 900 | `#020817` | Main background |
| Dark 800 | `#0a0f1e` | Card backgrounds |

---

## 📄 License

MIT — feel free to use this as a template for your own portfolio.

---

## 🙏 Credits

Built with [React](https://react.dev), [Vite](https://vitejs.dev), [Tailwind CSS](https://tailwindcss.com), [Framer Motion](https://www.framer.com/motion/), and [Lucide Icons](https://lucide.dev).
