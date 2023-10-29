import { Box, styled, ThemeProvider, createTheme } from '@mui/material';
import { Header } from './header';
import { Navigation } from './navigation';
import { CFC } from '@/types/react';

const FullSizeContainer = styled(Box)({
  display: 'flex'
});

const Wrapper = styled(Box)({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  height: '100vh'
});

// Define a theme with the desired body background color
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'rgb(55, 65, 81) !important' // Set the desired background color for the body
        }
      }
    }
  }
});

export const Layout: CFC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <FullSizeContainer>
          {children}
        </FullSizeContainer>
        <Navigation />
      </Wrapper>
    </ThemeProvider>
  );
};
