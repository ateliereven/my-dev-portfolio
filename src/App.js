import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './scss/styles.scss';

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";

function App() {

  // set color theme for the app:
  const theme = createTheme({
    palette: {
      primary: {
        light: '#add3d7',
        main: '#7da2a6',
        dark: '#4f7377',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ffffff',
        main: '#e4e4e4',
        dark: '#b2b2b2',
        contrastText: '#000',
      },
      background: {
        default: '#f7f7f7'
      },
      info: {
        light: '#c797aa',
        main: '#96697b',
        dark: '#673e4f',
        contrastText: '#fff',
      }
    },
  });

  return (
    <div >
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <NavBar />
      <Header />
      <Main />
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
