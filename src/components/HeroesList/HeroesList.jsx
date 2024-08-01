import HeroesItem from 'components/HeroesItem/HeroesItem';
import React from 'react';
import { StyledList } from './MovieList.styled';

const HeroesList = ({ heroes }) => {
  return (
    <StyledList>
      {heroes.map(hero => {
        return <HeroesItem hero={hero} key={hero.id} />;
      })}
    </StyledList>
  );
};

export default HeroesList;
