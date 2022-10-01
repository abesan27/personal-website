/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "600px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "600px",
      },
    },
    extend: {},
  },
  plugins: [],
};
