/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}",'./components/**/*.{js,jsx,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {



          primary: "#31CDB6",
          secondary: "#30DBBD",
          accent: "#58C760",
          white: "#FFFFFF",

          // matching extra colors
          dark: "#0F172A",
          text: "#1E293B",
          muted: "#64748B",
          border: "#DDE5EC",
          soft: "#F4FFFC",
          card: "#FFFFFF",
          inputBg: "#F8FAFC",
        },
      },
      boxShadow: {
        soft: "0 6px 20px rgba(49, 205, 182, 0.15)",
      },
    },
  },
  plugins: [],
}