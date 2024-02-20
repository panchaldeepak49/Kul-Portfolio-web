/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily :{
        DarkerGrotesque : ['Darker Grotesque','sans-serif'],
        OpenSans : ['Open Sans','sans-serif'],
        Syne : ['Syne','sans-serif'],
        PlayFair : ['Playfair Display','sans-serif'],
        ZillaSlab : ['Zilla Slab', 'serif'],
        Sriracha : ['sriracha-regular']
        
       }
    },
  },
  plugins: [],
}

