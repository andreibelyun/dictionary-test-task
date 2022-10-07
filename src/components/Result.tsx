import React from 'react';
import { Typography } from '@mui/material';
import WordList from './WordList';

function Result() {
  return (
    <main>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: '24px', md: '32px' },
          textAlign: 'center',
          mb: 4
        }}
      >
        Result
      </Typography>
      <WordList />
    </main>
  );
}

export default Result;
