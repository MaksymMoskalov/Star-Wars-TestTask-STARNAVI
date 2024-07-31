import { getAllHeroes } from 'service/starWarsAPI';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const allHeroesThunk = createAsyncThunk('all', async (_, thunkAPI) => {
  try {
    const swHeroesData = await getAllHeroes();
    return swHeroesData;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
