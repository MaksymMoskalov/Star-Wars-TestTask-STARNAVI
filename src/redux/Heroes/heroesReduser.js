import { generateElements } from 'service/nodesGenerator';
import {
  allHeroesThunk,
  exectHeroThunk,
  filmsWithHeroThunk,
  heroStarshipsThunk,
} from './heroesOperations';

import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  heroes: [],
  heroInfo: {
    character: {},
    starShips: [],
    movies: [],
  },
  elements: {},
  isLoading: null,
  error: null,
};
const swHeroesSlice = createSlice({
  name: 'swHeroes',
  initialState: INITIAL_STATE,
  reducers: {
    handleReset(state, _) {
      state = INITIAL_STATE;
    },
    handleElements(state, _) {
      state.elements = generateElements(
        state.heroInfo.character,
        state.heroInfo.movies,
        state.heroInfo.starShips
      );
    },
  },
  extraReducers: builder =>
    builder
      .addCase(allHeroesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.heroes = action.payload.results;
      })
      .addCase(exectHeroThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.heroInfo.character = action.payload;
        console.log(action.payload);
      })
      .addCase(filmsWithHeroThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.heroInfo.movies = action.payload;
        console.log(action.payload);
      })
      .addCase(heroStarshipsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.heroInfo.starShips = action.payload;
        console.log(action.payload);
      })

      .addMatcher(
        isAnyOf(
          allHeroesThunk.pending,
          filmsWithHeroThunk.pending,
          heroStarshipsThunk.pending
        ),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          allHeroesThunk.rejected,
          filmsWithHeroThunk.rejected,
          heroStarshipsThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { handleElements } = swHeroesSlice.actions;
export const swHeroesReducer = swHeroesSlice.reducer;
