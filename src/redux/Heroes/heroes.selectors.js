export const selectHeroes = state => state.swHeroes.heroes;
export const selectFilmsWithHero = state => state.swHeroes.heroInfo.movies;
export const selectExactHero = state => state.swHeroes.heroInfo.character;
export const selectElements = state => state.swHeroes.elements;
export const selectPageCount = state => state.swHeroes.pageCount;
export const selectCurrentPage = state => state.swHeroes.currentPage;
