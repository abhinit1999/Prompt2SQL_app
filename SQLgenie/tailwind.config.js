// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class', // << VERY IMPORTANT
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//    extend: {
//   colors: {
//     brand: '#6366F1',
//     accent: '#8B5CF6',
//     darkBg: '#0F172A',
//     lightBg: '#F9FAFB',
//     lightText: '#111827',
//     darkText: '#F3F4F6',
//     borderGray: '#E5E7EB',
//     lightBg: "#fdfdfd",
//     lightText: "#333",
//     darkBg: "#0e0e0e",
//     darkText: "#fff",
//     primary: "#6366f1",
//     golden: '#FFD700',
//   black: '#000000',
//   blue: {
//     DEFAULT: '#1E3A8A',
//     700: '#1D4ED8',
    
//   },
// }
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#6366F1',
        accent: '#8B5CF6',
        darkBg: '#0F172A',
        lightBg: '#F9FAFB',
        lightText: '#111827',
        borderGray: '#E5E7EB',
        primary: '#6366f1',
        golden: '#FFD700',
        black: '#000000',
        blue: {
          DEFAULT: '#1E3A8A',
          700: '#1D4ED8',
        },
      },
    },
  },
  plugins: [],
}