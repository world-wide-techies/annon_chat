/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        "alpha-white-90": "rgba(255, 255, 255, 0.9)",
        "neutral-500-light": "#71717a",
        "neutral-900-light": "#202024",
        "neutral-600-light": "#52525b",
        "alpha-black-10": "rgba(82, 62, 194, 0.1)",
        "alpha-white-5": "rgba(255, 255, 255, 0.05)",
        "alpha-white-80": "rgba(255, 255, 255, 0.8)",
      },
      fontFamily: {
        roboto: "Roboto",
        lexend: "Lexend",
        SfProText: "'SF Pro Text'",
      },
      backgroundImage: {
        "hero-bg": "url('/assets/backgrounds/hero_bg.png')",
        "testimonials-bg": "url('/assets/backgrounds/testimonials_bg.png')",
        "finalCta-bg": "url('/assets/backgrounds/finalCta_bg.png')",
      },
      screens: {
        'tall': { 'raw': '(min-height: 900px)' },
        'vtall': { 'raw': '(min-height: 1300px)'},
      }
    },
  },

  plugins: [],
};
