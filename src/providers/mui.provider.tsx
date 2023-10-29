import { useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { indigo, blueGrey } from '@mui/material/colors';
import { ColorMode, useColorMode } from './mode.provider';
import { OverrideLinkBehaviorThemeComponents } from '@/components/base';
import { CFC } from '@/types/react';

const common = {
  primary: indigo,
};

const pallettes = {
  [ColorMode.LIGHT]: {
    mode: ColorMode.LIGHT,
    background: {
      default: '#F5F5F5',
      paper: '#fff',
    },
    header: {
      background: indigo[500],
      text: '#fff',
    },
    ...common,
  },
  [ColorMode.DARK]: {
    mode: ColorMode.DARK,
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    header: {
      background: indigo[900],
      text: '#fff',
    },
    ...common,
  },
};

export const MuiProvider: CFC = ({ children }) => {
  const { mode } = useColorMode();

  const theme = useMemo(() => {
    return createTheme({
      palette: pallettes[mode],
      components: {
        ...OverrideLinkBehaviorThemeComponents,
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              backgroundColor: mode === ColorMode.DARK ? blueGrey[900] : blueGrey[100],
            },
          },
        },
        MuiGrid: {
          styleOverrides: {
            root: {
              backgroundColor: 'rgb(55, 65, 81)', // Set the background color for all Grid components
            },
          },
        },
        MuiButtonBase: {
          // ... custom configurations for MuiButtonBase
        },
      },
      shape: {
        headerHeight: '4rem',
      },
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

