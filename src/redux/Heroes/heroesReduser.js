import { allHeroesThunk } from './heroesOperations';

import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  heroes: [],
  heroInfo: {
    starShips: [],
    movies: [],
  },
};
const swHeroesSlice = createSlice({
  name: 'swHeroes',
  initialState: INITIAL_STATE,
  reducers: {
    handleReset(state, _) {
      state = INITIAL_STATE;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(allHeroesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dayTopMovies = action.payload.results;
      })

      .addMatcher(isAnyOf(allHeroesThunk.pending), (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(allHeroesThunk.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { handlResetFilmData, handlResetSearch } = swHeroesSlice.actions;
export const swHeroesReducer = swHeroesSlice.reducer;
