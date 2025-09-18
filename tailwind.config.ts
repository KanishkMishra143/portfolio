
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#1a1a1a',
        'secondary': '#2a2a2a',
        'accent': '#3a3a3a',
        'text-primary': '#ffffff',
        'text-secondary': '#b3b3b3',
      },
    },
  },
  plugins: [],
}
export default config
