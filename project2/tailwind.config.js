/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/theme";

export default {
  content: [
    "./App.jsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",

  plugins: [nextui()],
}
