import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from "./App.jsx";
import '@fontsource/pacifico'; // Import the Pacifico font

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Pacifico, Arial',
    h1: {
      fontFamily: 'Pacifico, Arial',
    },
    h2: {
      fontFamily: 'Pacifico, Arial',
    },
    h3: {
      fontFamily: 'Pacifico, Arial',
    },
    h4: {
      fontFamily: 'Pacifico, Arial',
    },
    h5: {
      fontFamily: 'Pacifico, Arial',
    },
    h6: {
      fontFamily: 'Pacifico, Arial',
    },
    subtitle1: {
      fontFamily: 'Pacifico, Arial',
    },
    subtitle2: {
      fontFamily: 'Pacifico, Arial',
    },
    body1: {
      fontFamily: 'Pacifico, Arial',
    },
    body2: {
      fontFamily: 'Pacifico, Arial',
    },
    button: {
      fontFamily: 'Pacifico, Arial',
    },
    caption: {
      fontFamily: 'Pacifico, Arial',
    },
    overline: {
      fontFamily: 'Pacifico, Arial',
    },
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
