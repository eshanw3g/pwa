import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#363636'
    },
    secondary: {
      main: '#FF0101'
    },
    background: {
      default: '#EBEBEB',
      secondary: '#F7F7F7'
    },
    text: {
      secondary: '#747474'
    },
    disabled: {
      main: '#747474'
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    button: {
      textTransform: 'none'
    }
  },
  spacing: 1,
  shape: {
    borderRadius: 1
  }
});

export default theme;
