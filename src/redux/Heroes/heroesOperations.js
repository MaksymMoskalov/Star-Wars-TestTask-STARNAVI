import {
  getAllHeroes,
  getExectHero,
  getFilmsWithHero,
  getHeroStarShips,
} from 'service/starWarsAPI';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const allHeroesThunk = createAsyncThunk(
  'heroes/all',
  async (page, thunkAPI) => {
    try {
      const swHeroesData = await getAllHeroes(page);
      return swHeroesData;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const exectHeroThunk = createAsyncThunk(
  'heroes/exact',
  async (heroId, thunkAPI) => {
    try {
      const exectHero = await getExectHero(heroId);
      return exectHero;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filmsWithHeroThunk = createAsyncThunk(
  'hero/films',
  async (heroId, thunkAPI) => {
    try {
      const filmsWithHero = await getFilmsWithHero(heroId);
      return filmsWithHero;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const heroStarshipsThunk = createAsyncThunk(
  'hero/starships',
  async (heroId, thunkAPI) => {
    try {
      const heroStarships = await getHeroStarShips(heroId);
      return heroStarships;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
