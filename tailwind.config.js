/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",  "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    // fontFamily: {
    //   metapro: ["Meta Pro", "san-serif"],
    // },
    extend: {
      colors: {
        primary: "#008688",
        borderColor: '#E5E7EB',
        faintText: '#4B5563',
      }
    }
  },
  plugins: [],
}

