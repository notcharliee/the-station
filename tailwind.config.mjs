/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Geist Mono", "monospace"],
      },
      animation: {
        "static-opacity": "static-opacity 12s infinite",
      },
      keyframes: {
        "static-opacity": {
          "5%": { opacity: 0.1 },
          "10%": { opacity: 0.075 },
          "15%": { opacity: 0.1 },
          "20%": { opacity: 0.125 },
          "25%": { opacity: 0.1 },
          "30%": { opacity: 0.05 },
          "35%": { opacity: 0.1 },
          "40%": { opacity: 0.075 },
          "45%": { opacity: 0.1 },
          "50%": { opacity: 0.125 },
          "55%": { opacity: 0.1 },
          "60%": { opacity: 0.05 },
          "65%": { opacity: 0.1 },
          "70%": { opacity: 0.2 },
          "75%": { opacity: 0.7, filter: "brightness: 50%" },
          "80%": { opacity: 0.4 },
          "85%": { opacity: 0.1 },
          "90%": { opacity: 0.05 },
          "95%": { opacity: 0.075 },
          "100%": { opacity: 0.1 },
        },
      },
    },
  },
  plugins: [],
}
