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
| `src/config/site.ts` | Content configuration: branding, nav, footer, contact |
| `tailwind.config.js` | Styling: colors, fonts, spacing |
| `src/components/layout/` | Header and footer components |
| `src/pages/` | Route pages |

## Configuration Flow

1. Edit `src/config/site.ts` for content (branding, nav, footer, contact)
2. Edit `tailwind.config.js` for colors and styling
3. Components use Tailwind classes for colors (`bg-primary`, `text-primary`)
4. Components use `siteConfig` for content via `useSiteConfig()` or direct import
