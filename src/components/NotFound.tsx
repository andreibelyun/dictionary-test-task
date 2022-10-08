import React from 'react';
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
      <Button>Go to homepage</Button>
    </Box>
  );
}

export default NotFound;
