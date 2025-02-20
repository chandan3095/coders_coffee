/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f19509",
          dark: "#e86f00",
        },
        neutral: {
          DEFAULT: "#f1dabf",
          dark: "#f1dabf",
        },
        gray: {
          DEFAULT: "#272c35",
          dark: "#1a1f25",
        },
      },
    },
  },
  plugins: [],
};
