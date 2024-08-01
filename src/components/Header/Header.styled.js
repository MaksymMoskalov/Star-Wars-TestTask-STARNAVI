import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeared = styled.header`
  height: 8vh;
  display: flex;
  align-items: center;
  padding-left: 42px;
  padding-right: 42px;

  background-color: #0d1117;

  .header-link {
    padding: 20px;
    text-decoration: none;
    font-weight: 500;
    color: white;
    &:hover {
      color: #ad9236;
    }
    &.active {
      color: #ad9236;
    }
  }

  .login {
    padding: 20px;
    text-decoration: none;
    font-weight: 500;
    color: white;
    margin-left: auto;
    &:hover {
      color: #ad9236;
    }
    &.active {
      color: #ad9236;
    }
  }

  .search {
    margin-left: 300px;
  }
`;

export const Logo = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;
  color: yellow;
  margin-left: auto;
  margin-right: auto;
`;
export const Acsent = styled.span`
  color: yellow;
`;

export const StyledNav = styled.nav`
  margin-left: 42px;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  .exit-btn {
    display: block;
    height: 35px;
    margin-left: 20px;

    font-size: 16px;
    color: gray;
    background-color: transparent;

    border: 2px solid #ad9236;
    border-radius: 10px;

    &:hover {
      border: 2px solid yellow;
      color: #ad9236;
    }
  }
  .avatar {
    color: gray;
    width: 30px;
    height: 30px;
    margin-left: 8px;
  }

  .hed-acs {
    color: #ad9236;
  }
`;
