import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserNinja } from 'react-icons/fa';
import {
  Acsent,
  Logo,
  StyledHeared,
  StyledNav,
  UserWrapper,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeared>
      <Logo to={`/`}>StarWars</Logo>
    </StyledHeared>
  );
};

export default Header;
