import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
      colors: {
        primary: '#2dd4bf',
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
