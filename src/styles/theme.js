// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000', // Rojo
    },
    secondary: {
      main: '#00FF00', // Verde
    },
    background: {
      default: '#FFFFFF', // Fondo claro
      paper: '#F5F5F5', // Superficie clara
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
  },
});

export default theme;
