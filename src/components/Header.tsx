import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsNavOpen(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setIsNavOpen(null);
  };

  return (
    <header>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h5" component="span" sx={{ flexGrow: 1 }}>
              Dictionary
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button color="inherit">Main</Button>
              <Button color="inherit">Result</Button>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={isNavOpen}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(isNavOpen)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                <MenuItem key="main" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Main</Typography>
                </MenuItem>
                <MenuItem key="result" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Result</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
