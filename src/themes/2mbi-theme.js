import { createMuiTheme } from '@material-ui/core';

const defaultTheme = createMuiTheme({
  spacing: 8,
  palette: {
    text: {
      primary: '#444',
    },
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'],
    // color: '#444',
  },
  /*
  palette: {
    primary: {
      main: '#117AFF',
    },
    secondary: {
      main: '#117AFF',
    },
  },
  */
});

export default defaultTheme;
