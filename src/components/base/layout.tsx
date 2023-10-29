import { Box, styled } from '@mui/material';

import { Header } from './header';
import { Navigation } from './navigation';

import { CFC } from '@/types/react';

const FullSizeContainer = styled(Box)({
  display: 'flex',
  backgroundColor: 'rgb(55, 65, 81) !important' // Set the background color with !important to override other styles
});

const Wrapper = styled(Box)({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  height: '100vh'
});

export const Layout: CFC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <FullSizeContainer>
        {children}
      </FullSizeContainer>
      <Navigation />
    </Wrapper>
  );
};


