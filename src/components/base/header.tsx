import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { InfoPanel } from './info-panel/info-panel';
import { ChangeMode } from '../ui/change-mode';
import { useIsDesktop } from '@/hooks/is-desktop';

export const Header = () => {
  const { isDesktop } = useIsDesktop();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: 'url("https://dreamcanvas.xyz/bg.jpg")', // specify the background image
        color: 'header.text',
        height: 'shape.headerHeight'
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <img src="https://dreamcanvas.xyz/logo.png" alt="logo" />
        </IconButton>
        <Typography
          sx={{
            flexGrow: 1,
            display: 'grid',
            placeItems: 'center'
          }}
          variant="h6"
          component="div"
        ></Typography>
        <ChangeMode />
        {!isDesktop && <InfoPanel />}
      </Toolbar>
    </AppBar>
  );
};
