/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo
        secondary: "#ec4899", // Pink
        accent: "#8b5cf6", // Purple
        background: "#f9fafb", // Light gray
        dark: "#1f2937", // Dark gray
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}