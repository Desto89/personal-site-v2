module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'primary': '#FF2C75'
      },
      borderColor: {
        'primary': '#FF2C75'
      },
      backgroundImage: {
        'personal': 'url("https://i.ibb.co/XZmH82k/img1.jpg")',
        'cheapfoods': 'url("https://i.ibb.co/XsFBD5y/img2.jpg")'
      }
    },
  },
  plugins: [],
}
