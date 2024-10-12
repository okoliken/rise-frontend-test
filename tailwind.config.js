/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'teal-1':'#07969E',
        'rise-black':'#2D2D2D',
        'rise-body':'#4A5050',
        'rise-grey-white':'#7B8DA8',
        'rise-border': '#919FB533',
        'rise-orange-1': '#FFF4F0',
        'rise-indigo-1': '#F6F2FF',
        'rise-teal-2': '#40BBC3',
        'rise-teal-3': '#A0DDE2',
        'rise-teal-4': '#ECFEFE',
      },
      boxShadow:{
        'rise-drop-shadow':'0px 12px 24px 0px #40BBC326'
      }
    },
  },
  plugins: [],
}

