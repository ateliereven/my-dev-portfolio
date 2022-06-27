import { useState, useMemo, useCallback } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './scss/styles.scss';

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import { PaletteMode } from "@mui/material";

function App() {
//enable dark mode by user preference:
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');

  // passing a callback function to NavBar as props:
  const handleChangeMode = useCallback((chosenMode: PaletteMode) => {
    setMode(chosenMode);
  }, [mode])

  // set color theme for the app, update theme only if the mode changes:
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      ...(mode === "light" ?
      {
        primary: {
          light: '#aecfd9',
          main: '#7e9ea8',
          dark: '#517079',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ffffff',
          main: '#dddddd',
          dark: '#b2b2b2',
          contrastText: '#000',
        },
        background: {
          default: '#f7f7f7'
        },
        info: {
          light: '#c797aa',
          main: '#96697b',
          dark: '#78515c',
          contrastText: '#fff',
        }
      } : {
          primary: {
          light: '#517079',
          main: '#7395a0',
          dark: '#aecfd9',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ffffff',
            main: '#b2b2b2',
            dark: '#b2b2b2',
            contrastText: '#fff',
          },

          info: {
            light: '#c797aa',
            main: '#c797aa',
            dark: '#673e4f',
            contrastText: '#fff',
          }
      }
      )
    },
    typography: {
      h1: {
        fontSize: '6rem',
        '@media (max-width:600px)': {
          fontSize: '5rem',
        },
      },
      h3: {
        fontSize: '3rem',
        '@media (max-width:600px)': {
          fontSize: '2.5rem',
        },
        '@media (max-width:400px)': {
          fontSize: '2.3rem',
        },
      }
    },
  }), [mode]
  );

  return (
    <div >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar changeMode={handleChangeMode} initialMode={mode} />
        <Header mode={mode}/>
        <Main />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
