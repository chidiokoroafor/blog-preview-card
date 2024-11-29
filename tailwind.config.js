/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "hsl(47, 88%, 63%)"
      },
     
    },
    fontFamily: {
      sans: ["Figtree", "sans-serif"]
    }
  },
  plugins: [],
}

