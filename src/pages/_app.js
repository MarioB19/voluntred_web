import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#4CAF50', // Verde
      },
      secondary: {
        main: '#F44336', // Rojo
      },
      info: {
        main: '#2196F3', // Azul
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
          <Head>
        <title>VoluntRED</title>
        <link rel="icon" href="../../logo.png" type="image/png" />

      </Head>
      <CssBaseline />
      <Component {...pageProps} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  );
}

export default MyApp;