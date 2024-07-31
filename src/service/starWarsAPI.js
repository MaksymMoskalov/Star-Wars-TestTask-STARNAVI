import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://sw-api.starnavi.io/`,
});

export const getAllHeroes = async (page = 1) => {
  const { data } = await instance.get(`people/?page=${page}`);
  return data;
};

// export const getWeekTrendMovies = async () => {
//   const { data } = await axios.get(
//     `https://api.themoviedb.org/3/trending/movie/week?language=uk-UK&api_key=${API_KEY}`
//   );
//   return data;
// };

// export const getTopRated = async () => {
//   const { data } = await axios.get(
//     // `https://api.themoviedb.org/3/movie/upcoming?language=uk-UK&page=1&api_key=${API_KEY}`
//     `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`
//   );
//   return data;
// };

// export const getMovieDetails = async movieId => {
//   const { data } = await axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}?language=uk-UK&api_key=${API_KEY}`
//   );
//   return data;
// };

// export const getMovieCast = async movieId => {
//   const { data } = await axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}/credits?language=uk-UK&api_key=${API_KEY}`
//   );
//   return data.cast;
// };

// export const getMovieReviews = async movieId => {
//   const { data } = await axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
//   );
//   return data.results;
// };

// export const getMovieByKeyWord = async keyWord => {
//   const { data } = await axios.get(
//     `https://api.themoviedb.org/3/search/movie?query=${keyWord}&include_adult=false&language=uk-UK&page=1&api_key=${API_KEY}`
//   );
//   return data.results;
// };

// export const getMovieGenres = async () => {
//   const { data } = await axios.get(
//     `https://api.themoviedb.org/3/genre/movie/list?language=uk-UK&api_key=${API_KEY}`
//   );
//   return data;
// };

// export const getSortedMovies = async params => {
//   console.log(params);
//   const { data } = await axios.get(
//     `https://api.themoviedb.org/3/discover/movie?sort_by=${params.method}&language=uk-UK&with_genres=${params.genre}&year=${params.year}&api_key=${API_KEY}`
//   );
//   return data.results;
// };
