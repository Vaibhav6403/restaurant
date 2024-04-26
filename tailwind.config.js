/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // backgroundImage: theme => ({
      //   'custom-image': "url('./src/assests/image.jpg')",
      // }),
      backgroundImage:{
        'first-image':"url('/src/assets/image.jpg')"
      },
      
    },
    
  },
  plugins: [],
}

