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
    fontSize: 15,
  },
});

export default defaultTheme;
