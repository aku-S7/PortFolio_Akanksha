/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          'from': { width: '0ch' },
          'to': { width: '20ch' }, // Adjust as needed
        },
      },
      animation: {
        typing: 'typing 2s steps(30) infinite alternate-reverse',
      },

      keyframes: {
        appear: {
          '0%': { opacity: 0, transform: 'translateX(-100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        appear: 'appear 1s ease-out',
      },
    },
  },
  plugins: [],
};
