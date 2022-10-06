import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Box,
  Button,
  CircularProgress
} from '@mui/material';

function Main() {
  const [searchKey, setSearchKey] = useState('');

  const [loading, setLoading] = useState(true);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(!loading);
  };

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
        Start search
      </Typography>
      <form onSubmit={handleSearch}>
        <Box
          sx={{
            m: 'auto',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <TextField
            type="search"
            value={searchKey}
            onChange={handleInput}
            placeholder="Type word here ..."
            sx={{
              width: { xs: '80%', md: '60%' },
              mr: '5px'
            }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={Boolean(!searchKey)}
          >
            Search
          </Button>
        </Box>
        <Box
          sx={{
            m: 'auto',
            mt: 10,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {loading && <CircularProgress />}
        </Box>
      </form>
    </main>
  );
}

export default Main;
