import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
      colors: {
        primary: '#2dd4bf',
        secondary: '#7b7c7e',
        bordercolor: '#d4d3d3',
      },
      screens: {
        xxsm: '340px',
        xsm: '444px',
        xssm: '520px',
        xmd: '880px',
        xmmd: '976px',
      },
    },
  },
  plugins: [],
};
export default config;
