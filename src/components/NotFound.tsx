import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

function NotFound() {
  return (
    <Box
      sx={{
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography
        variant="h1"
        component="h2"
        color="text.secondary"
        sx={{ textAlign: 'center' }}
      >
        404
      </Typography>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
        Page not found
      </Typography>
      <NavLink to="/pages/main" style={{ textDecoration: 'none' }}>
        <Button>Go to homepage</Button>
      </NavLink>
    </Box>
  );
}

export default NotFound;
