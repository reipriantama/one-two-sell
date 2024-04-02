import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        fullLg: '0 10px 8px rgb(0 0 0 / 0.04)',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        fullLg: '0 10px 8px rgb(0 0 0 / 0.04)',
      },
      colors: {
        'navy-blue': '#4A62A2',
        'gradient-blue': `linear-gradient(to bottom, #4A62A2, #2D4074)`,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-footer': `linear-gradient(to bottom, #4A62A2, #2D4074)`,
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        albertSans: ['Albert Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
