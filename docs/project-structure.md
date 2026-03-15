# Project Structure

```
web-template-vue/
├── public/                 # Static assets
│   └── logo.svg           # Default logo
├── src/
│   ├── assets/
│   │   └── css/
│   │       └── main.css   # Global styles & CSS variables
│   ├── components/
│   │   ├── layout/        # Layout components
│   │   │   ├── AppHeader.vue
│   │   │   └── AppFooter.vue
│   │   └── ui/            # Reusable UI components
│   │       ├── Badge.vue
│   │       ├── Button.vue
│   │       ├── Card.vue
│   │       └── Input.vue
│   ├── composables/
│   │   └── useSiteConfig.ts   # Site config composable
│   ├── config/
│   │   └── site.ts        # Main configuration file
│   ├── data/
│   │   └── products.json  # Sample product data
│   ├── layouts/
│   │   ├── auth.vue       # Auth layout (login pages)
│   │   └── default.vue    # Default layout
│   ├── pages/
│   │   ├── index.vue      # Home page
│   │   ├── about.vue      # About page
│   │   ├── contact.vue    # Contact page
│   │   ├── login.vue      # Login page
│   │   └── products/
│   │       ├── index.vue  # Products listing
│   │       └── [id].vue   # Product detail
│   └── app.vue            # Root app component
├── docs/                  # Documentation
├── nuxt.config.ts         # Nuxt configuration
├── tailwind.config.js     # Tailwind configuration
└── package.json
```

## Key Files

| File | Purpose |
|------|---------|
| `src/config/site.ts` | Central configuration for branding, colors, nav, etc. |
| `src/assets/css/main.css` | Global styles and CSS variables |
| `src/components/layout/` | Header and footer components |
| `src/pages/` | Route pages |
| `tailwind.config.js` | Tailwind CSS configuration |

## Configuration Flow

1. Edit `src/config/site.ts` to change content
2. CSS variables in `src/assets/css/main.css` sync with config
3. Components automatically use the config via `useSiteConfig()` or direct import
