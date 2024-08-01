import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cover, StyledItem, StyledItemPoster, Title } from './MovieItem.styled';

const MovieItem = ({ hero }) => {
  const location = useLocation();

  const { id, name } = hero;

  return (
    <StyledItem key={id}>
      <Link
        state={{ from: location }}
        to={`/hero/${id}`}
        className="movie-title"
      >
        <Cover>
          <StyledItemPoster
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt={'sadawd'}
          />
        </Cover>
        <Title>{name}</Title>
      </Link>
    </StyledItem>
  );
};

export default MovieItem;
