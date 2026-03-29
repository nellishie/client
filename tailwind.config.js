/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', '"Sora"', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: '#0A1A2A',
        charcoal: '#111827',
        sand: '#F6F5F2',
        accent: '#1EC0A6',
        accentDark: '#14947F',
        card: '#0F2438',
      },
      boxShadow: {
        card: '0 20px 60px -24px rgba(10, 26, 42, 0.45)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(14, 30, 46, 0.18) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
