import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#303340',
        'white': '#FFFFFF',
        'purple': '#D4B5FC',
        'glass-white': '#FFFFFF40',
        'glass-dark': '#3D334A4D',
        'section-background': '#FBFBFF',
        'yellow': '#F3D57F',
        'grey': '#D4D4D4',
        'middle-grey': '#8D8D8D',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/assets/images/backgrounds/hero-bg.png')",
        'hero-texture': "url('/assets/images/backgrounds/hero-texture.png')",
        'hero-gradient': "linear-gradient(to right bottom, rgba(255, 243, 228, 0.9), rgba(245, 230, 255, 0.9), rgba(228, 230, 255, 0.9))",
        'main-gradient': "linear-gradient(to right, #D4B5FC, #F3D57F)",
      },
      fontFamily: {
        'bowler': ['Bowler', 'sans-serif'],
        'pt-root': ['PT Root UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config; 