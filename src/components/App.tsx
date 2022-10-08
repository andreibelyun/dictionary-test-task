import React from 'react';
import '../index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './Header';
import NotFound from './NotFound';
import Result from './Result';
import Main from './Main';

function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/pages/main" />} />
          <Route path="/pages/main" element={<Main />} />
          <Route path="/pages/result" element={<Result />} />
          <Route path="/:word" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
