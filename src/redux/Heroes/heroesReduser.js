import { generateElements } from 'service/nodesGenerator';
import {
  allHeroesThunk,
  exectHeroThunk,
  filmsWithHeroThunk,
  heroStarshipsThunk,
} from './heroesOperations';

import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  pageCount: 0,
  currentPage: 0,
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
    setPosts(state, action) {
      state.posts = action.payload.posts;
      state.pageCount = action.payload.pageCount;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(allHeroesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.heroes = action.payload.results;
        state.pageCount = Math.ceil(action.payload.count / 10);
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

export const { handleElements, setCurrentPage, setPosts } =
  swHeroesSlice.actions;
export const swHeroesReducer = swHeroesSlice.reducer;
