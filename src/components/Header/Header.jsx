import React from 'react';
import { Logo, StyledHeared } from './Header.styled';

const Header = () => {
  return (
    <StyledHeared>
      <Logo to={`/`}>StarWars</Logo>
    </StyledHeared>
  );
};

export default Header;
