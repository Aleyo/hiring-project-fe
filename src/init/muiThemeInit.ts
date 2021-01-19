import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#534bae',
      main: '#1a237e',
      dark: '#000051',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#e0e0e0',
      dark: '#aeaeae',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h2: {
      fontSize: '2.5rem',
      textAlign: 'center',
      marginBottom: 50,
      marginTop: 30,
      fontWeight: 500,
    },
  },
});
