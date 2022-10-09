import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../utils/hooks';
import WordList from './WordList';
import { setWords } from '../features/word/wordSlice';

function Result() {
  const navigate = useNavigate();
  const words = useAppSelector((state) => state.words);
  const [resultExists, setResultExist] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (words.words.length === 0 && !localStorage.words) setResultExist(false);
    else if (words.words.length === 0) {
      setResultExist(true);
      dispatch(setWords(JSON.parse(localStorage.words)));
    } else setResultExist(true);
  }, []);

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
      {resultExists ? (
        <WordList />
      ) : (
        <Box
          sx={{
            textAlign: 'center',
            mt: 7
          }}
        >
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              fontSize: { xs: '16px', md: '22px' },
              textAlign: 'center',
              mb: 1
            }}
          >
            There is nothing here yet
          </Typography>
          <Button
            sx={{
              fontSize: { xs: '12px', md: '15px' }
            }}
            onClick={() => navigate('/pages/main')}
          >
            start your search
          </Button>
        </Box>
      )}
    </main>
  );
}

export default Result;
