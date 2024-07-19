import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    screens: {
      mobile: { max: '767px' },
      'after-mobile': { min: '768px' },
      tablet: { min: '768px', max: '1439px' },
      'before-desktop': { max: '1439px' },
      desktop: { min: '1440px' },
    },
    extend: {
      colors: {
        'ui-grey': {
          60: '#817D92',
          80: '#24232C',
        },
        'ui-dark': '#18171F',
        'ui-light': '#E6E5EA',
        'ui-green': '#A4FFAF',
        'ui-red': '#F64A4A',
        'ui-orange': '#FB7C58',
        'ui-yellow': '#F8CD65',
      },
      fontSize: {
        '16px': '16px',
        '18px': '18px',
        '24px': '24px',
        '32px': '32px',
      },
      margin: {
        '134px': '134px',
      },
    },
  },
  plugins: [],
}
export default config
