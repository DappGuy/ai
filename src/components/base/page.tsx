import { Box, styled } from '@mui/material';

export const Page = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  backgroundColor: 'rgb(55, 65, 81)' // Add the background color here
}));

