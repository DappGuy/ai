import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import { InfoPanel } from './info-panel/info-panel';
import { ChangeMode } from '../ui/change-mode';
import { useIsDesktop } from '@/hooks/is-desktop';

export const Header = () => {
  const { isDesktop } = useIsDesktop();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Define the type for anchorEl

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event && event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Item 1', onClick: handleMenuClose },
    { label: 'Item 2', onClick: handleMenuClose },
    { label: 'Item 3', onClick: handleMenuClose },
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
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ mr: 2 }}
        >
          <i className="material-icons">menu</i>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={item.onClick}>
              {item.label}
            </MenuItem>
          ))}
        </Menu>
        <ChangeMode /> {/* Assuming ChangeMode is a valid component */}
        {!isDesktop && <InfoPanel />}
      </Toolbar>
    </AppBar>
  );
};
