import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../utils/hooks';
import { fetchWord } from '../features/word/wordSlice';

function DirectLinkSearcher() {
  const { word } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSearchSuccess = () => {
    navigate('/pages/result');
  };

  const handleSearchFail = () => {
    navigate('/pages/not-found');
  };

  useEffect(() => {
    dispatch(fetchWord(String(word)))
      .unwrap()
      .then(handleSearchSuccess)
      .catch(handleSearchFail);
  }, []);

  return (
    <Box sx={{ textAlign: 'center', pt: 3 }}>
      <CircularProgress />
    </Box>
  );
}

export default DirectLinkSearcher;
