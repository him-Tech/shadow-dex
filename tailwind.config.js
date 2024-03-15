/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        black: "#050201",
        black_100: "#131622",
        black_200: "#616161",
        black_300: "#141922",
        black_400: "#161D26",
        black_500: "#1C1E28",
        black_600: "#4D4D52",
        white: "#FFFFFF",
        whiteOpacity10: "rgba(255, 255, 255, 0.1)",
        white_100: "#F2F2F2",
        gray_100: "#818181",
        gray_200: "#848484",
        gray_300: '#A4A8AB',
        gray_400: '#969696',
        gray_500: "#9F9F9F",
        success: "#08C077",
        red: "#EF4444",
        blue: "#9199B1",
        pink: "#F63966",
        yellow: '#C19A27'
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
