module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    height: {
			"10v": "10vh",
      "15v": "15vh",
			"20v": "20vh",
			"30v": "30vh",
			"40v": "40vh",
			"50v": "50vh",
			"60v": "60vh",
			"70v": "70vh",
			"75v": "76vh",
			"80v": "80vh",
			"90v": "90vh",
      "95v": "93.5vh",
			"100v": "100vh",
		},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
