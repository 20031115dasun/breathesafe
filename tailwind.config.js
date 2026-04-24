/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specifies the directories to scan for utility classes to ensure they are generated
  content: ["./app/**/*.{js,jsx,ts,tsx}", './components/**/*.{js,jsx,ts,tsx}'],
  
  // Uses the NativeWind preset to bridge Tailwind CSS with React Native styling
  presets: [require("nativewind/preset")],
  
  theme: {
    extend: {
      // Custom color palette defined for the BreatheSafe brand identity
      colors: {
        brand: {
          // Core branding colors
          primary: "#31CDB6",
          secondary: "#30DBBD",
          accent: "#58C760",
          white: "#FFFFFF",

          // UI specific colors for typography, layout, and components
          dark: "#0F172A",
          text: "#1E293B",
          muted: "#64748B",
          border: "#DDE5EC",
          soft: "#F4FFFC",
          card: "#FFFFFF",
          inputBg: "#F8FAFC",
        },
      },
      // Custom shadow definition for a consistent soft-depth UI feel
      boxShadow: {
        soft: "0 6px 20px rgba(49, 205, 182, 0.15)",
      },
    },
  },
  // Placeholder for any additional Tailwind CSS plugins
  plugins: [],
}