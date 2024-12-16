/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary Blue
          primary: '#1E40AF', // Deep blue for primary actions and brand identity
          light: '#60A5FA',   // Light blue for hover states and highlights
          dark: '#1E3A8A',    // Darker blue for text contrast
        },
        neutral: {
          50: '#F8FAFC',      // Light background
          700: '#334155',     // Body text
          900: '#0F172A',     // Headings
        }
      },
    },
  },
  plugins: [],
}