import '../index.css';
import React from 'react';
import { Container } from '@mui/material';
import Header from './Header';
import Result from './Result';
// import Main from './Main';

function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        {/* <Main /> */}
        <Result />
      </Container>
    </>
  );
}

export default App;
