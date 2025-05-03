module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
            'hd': '1280px',
            'fhd': '1920px', 
            '4k': '3840px', 
          },
          fontFamily: {
            genos: ['var(--font-genos)', 'sans-serif'],
          },
      },
    },
    plugins: [require('@tailwindcss/typography'),],
  };