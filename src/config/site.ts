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
  contact: {
    email: 'hello@example.com',
    phone: '+1 234 567 890',
    address: '123 Main Street, City, Country',
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
    }
  },
  nav: {
    links: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/products' },
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
    ]
  },
  footer: {
    copyright: '© 2026 MyBrand. All rights reserved.',
    links: [
      { label: 'Privacy', path: '/privacy' },
      { label: 'Terms', path: '/terms' },
    ]
  }
}
