import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledItem, StyledItemPoster } from './MovieItem.styled';

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
        <div className="cover">
          <StyledItemPoster
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt={'sadawd'}
          />
        </div>
        <h3>{name}</h3>
      </Link>
    </StyledItem>
  );
};

export default MovieItem;
