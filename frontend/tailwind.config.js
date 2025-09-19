/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1c7893",
          dark: "#115669",
          light: "#42a2bf",
        },
        sidebar: "#1b2735",
        accent: "#0ab39c",
        muted: "#f5f7fb",
      },
      boxShadow: {
        card: "0 10px 30px rgba(28, 120, 147, 0.15)",
      },
    },
  },
  plugins: [],
};
