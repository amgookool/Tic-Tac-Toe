/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
