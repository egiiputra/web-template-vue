/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          foreground: '#FFFFFF',
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
  plugins: [],
}
