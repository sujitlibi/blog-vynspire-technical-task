import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // This might still work in some v4 setups
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
