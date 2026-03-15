# Customization Guide

All site customization is centralized in `src/config/site.ts`. This file controls branding, colors, navigation, footer, and contact information.

## Configuration File

Open `src/config/site.ts`:

```typescript
export const siteConfig = {
  brand: {
    name: 'MyBrand',
    tagline: 'Building amazing products',
    logo: '/logo.svg',
  },
  colors: {
    primary: '#3B82F6',
    primaryForeground: '#FFFFFF',
    secondary: '#64748B',
    accent: '#10B981',
    background: '#FFFFFF',
    foreground: '#1E293B',
  },
  // ... more options
}
```

## Branding

### Logo

1. Place your logo file in the `public/` folder
2. Update the path in `src/config/site.ts`:

```typescript
brand: {
  logo: '/your-logo.svg',  // or .png, .jpg
}
```

### Brand Name & Tagline

```typescript
brand: {
  name: 'Your Company Name',
  tagline: 'Your tagline goes here',
}
```

## Colors

Colors are defined directly in `tailwind.config.js`. Update the theme colors there:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#FF6B35',      // Main brand color
        foreground: '#FFFFFF',  // Text on primary color
      },
      secondary: '#64748B',
      accent: '#10B981',
      background: '#FFFFFF',
      foreground: '#1E293B',
      muted: '#F1F5F9',
      border: '#E2E8F0',
    },
  },
},
```

### Available Colors

| Color | Usage |
|-------|-------|
| `primary` | Buttons, links, highlights |
| `primary-foreground` | Text on primary color |
| `secondary` | Secondary buttons, subtle elements |
| `accent` | Success states, special highlights |
| `background` | Page background |
| `foreground` | Main text color |
| `muted` | Card backgrounds, secondary sections |
| `border` | Borders, dividers |

## Navigation

Update menu links in `src/config/site.ts`:

```typescript
nav: {
  links: [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]
}
```

## Footer

Customize footer content:

```typescript
footer: {
  copyright: '© 2026 Your Company. All rights reserved.',
  links: [
    { label: 'Privacy', path: '/privacy' },
    { label: 'Terms', path: '/terms' },
  ]
}
```

## Contact Information

Update contact details:

```typescript
contact: {
  email: 'hello@yourcompany.com',
  phone: '+1 234 567 890',
  address: '123 Main Street, City, Country',
  social: {
    twitter: 'https://twitter.com/yourcompany',
    facebook: 'https://facebook.com/yourcompany',
    instagram: 'https://instagram.com/yourcompany',
  }
}
```

## Using Config in Components

Import and use the config in any component:

```vue
<script setup lang="ts">
import { siteConfig } from '~/config/site'

const config = siteConfig
</script>

<template>
  <h1>{{ config.brand.name }}</h1>
  <p>{{ config.brand.tagline }}</p>
</template>
```

Or use the composable:

```vue
<script setup lang="ts">
const config = useSiteConfig()
</script>
```
