import styled from 'styled-components';

export const StyledItem = styled.li`
  width: 184px;

  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;

  .movie-title {
    color: white;
  }

  .cover {
    height: 100%;
  }
`;

export const StyledItemPoster = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  border-radius: 4px;
`;

export const ShortInfo = styled.span`
  font-size: 12px;
  color: #ad9236;
`;
