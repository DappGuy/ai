import { Box, styled } from '@mui/material';

import { Header } from './header';
import { Navigation } from './navigation';

import { CFC } from '@/types/react';

const CustomFullSizeContainer = styled(Box)({
  display: 'flex',
  backgroundColor: 'rgb(55, 65, 81)' // Set the background color for the FullSizeContainer
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
      <CustomFullSizeContainer>
        {children}
      </CustomFullSizeContainer>
      <Navigation />
    </Wrapper>
  );
};
