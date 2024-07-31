import { configureStore } from '@reduxjs/toolkit';
import { swHeroesReducer } from './Heroes/heroesReduser';

export const store = configureStore({
  reducer: {
    swHeroes: swHeroesReducer,
  },
});
