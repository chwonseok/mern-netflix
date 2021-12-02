import React from 'react';
import Nav from '../../components/Nav';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../components/styles/Theme';
import { Reset } from 'styled-reset';
import Featured from '../../components/Featured';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Nav />
      <Featured />
    </ThemeProvider>
  );
};

export default Home;
