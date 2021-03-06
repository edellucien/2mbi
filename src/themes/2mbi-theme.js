import { createMuiTheme } from '@material-ui/core';

export const colors = {
  primaryBlack: '#444',
  primaryRed: '#CA0B00',
  secondaryText: '#6f6f6f',
  secondaryGray: '#767676',
  secondaryLightGray: '#e5e5e5',
  whiteBackgroundTransparent: 'rgba(255, 255, 255, .9)',
  white: '#fff',
};

const defaultTheme = createMuiTheme({
  colors,
  spacing: 8,
  palette: {
    primary: {
      main: colors.primaryRed,
    },
    secondary: {
      main: colors.secondaryGray,
    },
    text: {
      primary: colors.primaryBlack,
      secondary: colors.secondaryText,
    },
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'],
    fontSize: 15,
  },
  overrides: {
    MuiCardContent: {
      root: {
        '&:last-child': {
          paddingBottom: 16,
        },
      },
    },
  },
});

export default defaultTheme;
