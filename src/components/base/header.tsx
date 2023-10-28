import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { InfoPanel } from './info-panel/info-panel';
import { ChangeMode } from '../ui/change-mode';
import { useIsDesktop } from '@/hooks/is-desktop';

export const Header = () => {
  const { isDesktop } = useIsDesktop();

  const handleItemClick = (label: string) => {
    // Handle item click logic here
    console.log(`Clicked on ${label}`);
  };

  const menuItems = [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: 'url("https://dreamcanvas.xyz/bg.jpg")',
        color: 'header.text',
        height: 'var(--shape-headerHeight)' // Ensure --shape-headerHeight is defined
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
        <div>
          {menuItems.map((item, index) => (
            <IconButton
              key={index}
              size="large"
              color="inherit"
              aria-label={item.label}
              onClick={() => handleItemClick(item.label)}
              sx={{ mr: 2 }}
            >
              {item.label}
            </IconButton>
          ))}
        </div>
        <ChangeMode /> {/* Assuming ChangeMode is a valid component */}
        {!isDesktop && <InfoPanel />}
      </Toolbar>
    </AppBar>
  );
};


