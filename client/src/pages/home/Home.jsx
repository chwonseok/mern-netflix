import React from 'react';
import Nav from '../../components/Nav';
import Featured from '../../components/Featured';
import List from '../../components/List';

const Home = () => {
  return (
    <>
      <Nav />
      <Featured type={'영화'} />
      <List />
      <List />
      <List />
    </>
  );
};

export default Home;
