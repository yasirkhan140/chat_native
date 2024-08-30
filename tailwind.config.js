const nativewind = require('nativewind/tailwind/css');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}","./app/**.{js,jsx,ts,tsx}","./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [nativewind],
}

