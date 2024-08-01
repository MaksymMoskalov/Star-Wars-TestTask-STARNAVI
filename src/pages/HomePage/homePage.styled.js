import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const HomeSection = styled.section`
  font-family: 'Star Jedi', sans-serif;
  padding-left: 100px;
  padding-right: 100px;

  color: #ffcc00;
  background-color: #000000;
`;

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  height: 50px;

  li {
    margin: 0 5px;

    &.active a {
      background-color: #ffcc00;
      color: #000;
      border-color: #ffcc00;
    }

    &.disabled a {
      color: #555;
      cursor: not-allowed;
    }

    a {
      padding: 8px 16px;
      border: 1px solid #555;
      border-radius: 5px;
      cursor: pointer;
      color: #ffcc00;
      text-decoration: none;

      &:hover {
        background-color: #ffcc00;
        color: #000;
      }
    }
  }
`;
