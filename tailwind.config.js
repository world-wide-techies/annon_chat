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
      borderRadius: {
        "90xl": "109px",
        "81xl": "100px",
        "2xs": "11px",
      },
      backgroundImage: {
        "hero-bg": "url('/assets/background/bg-img.jpg')",
        "testimonials_bg": "url('assets/backgrounds/testimonials_bg.png')",
      },
    },
    fontSize: {
      xl: "20px",
      "21xl": "40px",
      sm: "14px",
      "29xl": "48px",
      smi: "13px",
      base: "16px",
      "5xl": "24px",
      "45xl": "64px",
      lg: "18px",
      "11xl": "30px",
      "41xl": "60px",
    },
  },

  plugins: [],
};
