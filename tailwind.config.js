module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d8ecff',
          200: '#bfe0ff',
          300: '#8fc8ff',
          400: '#5caeff',
          500: '#2a8cff',
          600: '#196fe0',
          700: '#1555b0',
          800: '#174a91',
          900: '#183f75',
        },
        accent: '#14b8a6',
        dark: '#0f172a',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.20) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
