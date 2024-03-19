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
        'navy-blue': '#4A62A2',
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
