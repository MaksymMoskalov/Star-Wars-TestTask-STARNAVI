import React from 'react';
import { useSelector } from 'react-redux';
import { selectHeroes } from '/';

const HomePage = () => {
  const heroes = useSelector(selectHeroes);
  console.log(heroes);
  return <div>homePage</div>;
};

export default HomePage;
