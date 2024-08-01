import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectHeroes,
  selectPageCount,
} from '../../redux/Heroes/heroes.selectors';
import { allHeroesThunk } from '../../redux/Heroes/heroesOperations';
import HeroesList from 'components/HeroesList/HeroesList';
import { HomeSection, StyledReactPaginate } from './homePage.styled';
import { setCurrentPage } from '../../redux/Heroes/heroesReduser';

const HomePage = () => {
  const heroes = useSelector(selectHeroes);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const pageCount = useSelector(selectPageCount);

  useEffect(() => {
    dispatch(allHeroesThunk(currentPage + 1));
  }, [dispatch, currentPage]);

  const handlePageClick = data => {
    dispatch(setCurrentPage(data.selected));
  };

  return (
    <HomeSection>
      <HeroesList heroes={heroes} />
      <StyledReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </HomeSection>
  );
};

export default HomePage;
