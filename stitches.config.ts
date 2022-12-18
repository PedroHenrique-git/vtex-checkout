import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      gray: '#ccc',
    },
    fonts: {
      principal: 'Roboto, sans-serif',
    },
    space: {
      sp1: '1rem',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      thin: 100,
    },
  },
});
