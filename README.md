# Modern Configurable Portfolio Template
[![Svelte](https://img.shields.io/badge/Svelte-4.2-FF3E00?style=flat-square&logo=svelte)](https://svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

A minimal, fast, and fully configurable portfolio template built with modern web technologies. Features a beautiful glass-morphism design, dark mode support, and responsive layout.

## ✨ Features

- 🎨 Modern glass-morphism design
- 🌓 Dark/Light mode
- 📱 Fully responsive
- 🚀 Lightning fast with Vite
- 💪 Type-safe with TypeScript
- 🎯 SEO optimized
- 🔧 Easily configurable

## 🚀 Quick Start

1. Clone the repository
```bash
git clone https://github.com/NotSooShariff/svelte-portfolio.git
cd svelte-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Configure your portfolio by editing the config file at `src/data/config.json`:

```
{
  "name": "Shrek",
  "title": "Professional Swamp Defender",
  "image": "/profile.png",
  "bio": "What are you doing in my swamp?! Professional onion layer enthusiast, part-time ogre rights activist, and certified dragon whisperer. Making the swamp great again since 2001.",
  "social": {
    "github": "https://github.com/shrektastic",
    "linkedin": "https://linkedin.com/in/swamplife",
    "twitter": "https://twitter.com/allstar2001"
  },
  "tools": [
    {
      "name": "Swamp Skills",
      "skills": ["Onion Peeling", "Ear Wax Candles", "Roaring", "Mud Bathing", "Wall Building"]
    },
    {
      "name": "Combat", 
      "skills": ["Donkey Wrangling", "Knight Tossing", "Torch Mob Dispersal", "Fairy Tale Creature Management"]
    },
    {
      "name": "Social",
      "skills": ["Scaring Villagers", "Princess Rescue", "Dragon Negotiation", "Parfait Appreciation"]
    }
  ],
  "projects": [
    {
      "title": "Swamp Renovation",
      "description": "Converted a humble swamp into a premium 5-star mud resort with excellent boulder amenities",
      "link": "https://swamplife.far/far/away",
      "technologies": ["Mud", "Rocks", "Stick Architecture"]
    },
    {
      "title": "Duloc Castle Raid", 
      "description": "Successfully infiltrated and disrupted a wedding while proving true love's worth",
      "link": "https://duloc.far/far/away",
      "technologies": ["Dragon Power", "Donkey Support", "Wedding Crashing"]
    }
  ],
  "education": [
    {
      "degree": "PhD in Swampology",
      "school": "Far Far Away University",
      "year": "2001"
    }
  ],
  "research": [
    {
      "title": "The Complex Layers of Ogres and Onions: A Comparative Study",
      "publication": "Fairy Tale Scientific Journal",
      "year": "2004",
      "link": "https://example.com/onion-layers"
    },
    {
      "title": "Why Dragons and Donkeys Shouldn't Work: But Sometimes Do",
      "publication": "Magical Creatures Quarterly", 
      "year": "2003",
      "link": "https://example.com/dragon-love"
    }
  ]
}
```

4. Configure the SEO settings in `index.html` by editing the `<head>` section.

5. Change images like `profile.png` and `opengraph-image.png` `favicon.ico` to your own.

6. Run development server
```bash
npm run dev
```

## 🔧 Configuration

All portfolio content is managed through a single configuration file. Update your:

- Personal Information
- Social Links
- Skills & Tools
- Projects
- Education
- Research Publications

## 🎨 Customization

### Colors
Customize primary and secondary colors in `src/app.css`:

```
:root {
  --primary: 125 211 252;
  --secondary: 147 51 234;
}
```


### Typography
The template uses Plus Jakarta Sans by default. Change the font in `tailwind.config.js`:

```
fontFamily: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
```


## 📦 Building for Production


```bash
npm run build
```

## 🌐 Deployment

Deploy on your favorite platform:

[![Deploy to Vercel](https://img.shields.io/badge/Deploy%20to-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/new/clone)
[![Deploy to Netlify](https://img.shields.io/badge/Deploy%20to-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://app.netlify.com/start)
[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy%20to-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://pages.github.com)
[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy%20to-Cloudflare%20Pages-orange?style=for-the-badge&logo=cloudflare)](https://dash.cloudflare.com/?to=/:account/pages/new)

## 📄 License

MIT License - feel free to use this template for your personal portfolio!

---

Made with ❤️ using Svelte and TailwindCSS