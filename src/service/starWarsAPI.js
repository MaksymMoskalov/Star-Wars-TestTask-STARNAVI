import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://sw-api.starnavi.io/`,
});

export const getAllHeroes = async (page = 1) => {
  const { data } = await instance.get(`people/?page=${page}`);
  return data;
};

export const getExectHero = async heroId => {
  const { data } = await instance.get(`people/${heroId}/`);
  return data;
};

export const getFilmsWithHero = async heroId => {
  const { data } = await instance.get(`films/?characters__contains=${heroId}`);
  return data.results;
};

export const getHeroStarShips = async heroId => {
  const { data } = await instance.get(`starships/?pilots__contains=${heroId}`);
  return data.results;
};
