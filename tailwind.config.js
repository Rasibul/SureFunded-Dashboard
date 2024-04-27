/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-bg-color": "#171717",
        "border-bg":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(20, 241, 148, 0.50) 51%, rgba(255, 255, 255, 0.00) 100%)",
        "border-image-slice": 1,
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
