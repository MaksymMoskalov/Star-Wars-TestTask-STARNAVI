import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectHeroes } from '../../redux/Heroes/heroes.selectors';
import { allHeroesThunk } from '../../redux/Heroes/heroesOperations';
import HeroesList from 'components/HeroesList/HeroesList';

const HomePage = () => {
  const heroes = useSelector(selectHeroes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allHeroesThunk());
  }, [dispatch]);

  return (
    <section>
      <HeroesList heroes={heroes} />
    </section>
  );
};

export default HomePage;
