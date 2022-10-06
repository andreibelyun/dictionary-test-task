import React from 'react';
import { Container } from '@mui/material';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Main />
      </Container>
    </>
  );
}

export default App;
