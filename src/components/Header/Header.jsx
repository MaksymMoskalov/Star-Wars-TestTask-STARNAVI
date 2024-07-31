// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaUserNinja } from 'react-icons/fa';
// import {
//   Acsent,
//   Logo,
//   StyledHeared,
//   StyledNav,
//   UserWrapper,
// } from './Header.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectAuthAuthenticated,
//   selectAuthUtherData,
// } from '../../redux/authorization/auth.selectors';
// import { logOutThunk } from '../../redux/authorization/authOperations';
// import SearchBar from 'components/SearchBar/SearchBar';
// import { handlResetSearch } from '../../redux/Heroes/heroesReduser';

// const Header = () => {
//   const authenticated = useSelector(selectAuthAuthenticated);
//   const user = useSelector(selectAuthUtherData);
//   const disputch = useDispatch();

//   const logOut = () => {
//     disputch(logOutThunk());
//   };

//   const reset = () => {
//     disputch(handlResetSearch());
//   };

//   return (
//     <StyledHeared>
//       <Logo to={'/'}>
//         <Acsent>Film</Acsent>Finder
//       </Logo>
//       <StyledNav>
//         <NavLink to={'/'} className="header-link" onClick={reset}>
//           Home
//         </NavLink>
//       </StyledNav>
//       <SearchBar />
//       {authenticated && (
//         <UserWrapper>
//           <p>
//             Привіт <span className="hed-acs">{user.userName}</span>
//           </p>
//           <FaUserNinja className="avatar" />
//           <button type="button" onClick={logOut} className="exit-btn">
//             Вихід
//           </button>
//         </UserWrapper>
//       )}
//       {!authenticated && (
//         <NavLink to={'/login'} className="login">
//           LogIn
//         </NavLink>
//       )}
//     </StyledHeared>
//   );
// };

// export default Header;
