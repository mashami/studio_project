/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      center: true,
      padding:'1rem',
      
      
    },

    extend:{
      fontFamily:{
        sans:['Arimo', 'sans-serif']
      },

      colors:{
        primary: "#2639ED",
        secondary: "#565656",
        thirdColor:"#767676",
        fourthColor:"#F1F7FF",
        firthColor:"#FFF2F8",
        sixthColor :"#FFF7E3",
        seventhColor:"#DEFFEE",

      }
    },
  },
  plugins: [],
}
