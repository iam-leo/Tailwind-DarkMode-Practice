const tailwindcss = require("tailwindcss");

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: [
    './*.html',
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
