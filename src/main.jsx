import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from "./App.jsx";
import '@fontsource-variable/oswald'; // Import the Oswald font
import '@fontsource/poppins'; // Import the Poppins font
import '@fontsource/libre-baskerville';
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
    fontFamily: 'Libre Baskerville,Roboto, sans-serif',
    h1: {
      fontFamily: 'Libre Baskerville, cursive',
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
