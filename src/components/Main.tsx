import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  TextField,
  Box,
  Button,
  CircularProgress
} from '@mui/material';
import { Word } from '../types/word';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { fetchWord } from '../features/word/wordSlice';

function Main() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [searchKey, setSearchKey] = useState('');

  const { loading } = useAppSelector((state) => state.words);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };

  const handleSearchSuccess = (data: Word[]) => {
    navigate('/pages/result');
    localStorage.clear();
    localStorage.words = JSON.stringify(data);
  };

  const handleSearchFail = () => {
    navigate('/pages/not-found');
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchWord(searchKey))
      .unwrap()
      .then(handleSearchSuccess)
      .catch(handleSearchFail);
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
        Start your search
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
              width: '60%',
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
