/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'athen-black': '#0A0A0A',
        'athen-dark':  '#111111',
        'athen-card':  '#161616',
        'athen-border':'#2A2A2A',
        'athen-muted': '#3A3A3A',
        'athen-gray':  '#888888',
        'athen-light': '#BFBFBF',
        'athen-cream': '#E8E4DC',
        'athen-white': '#F5F2EC',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest2': '0.25em',
        'widest3': '0.35em',
      },
    },
  },
  plugins: [],
}
