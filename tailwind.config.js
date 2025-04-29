/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html", "./**/*.js"],
    theme: {
      extend: {
        perspective: {
          '1000': '1000px',
        },
        transform: {
          'rotate-y-180': 'rotateY(180deg)',
        },
      },
    },
    plugins: [],
  }