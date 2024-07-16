import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  getCssText,
  theme,
  createTheme,
  keyframes,
  css,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      gray900: '#121214',
      gray800: '#202024',

      gray500: '#8D8D99',
      gray300: '#C4C4CC',
      gray100: '#e1e1e6',

      green500: '#00875F',
      green300: '#00b37e',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
