// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { extractYear, genreFetcher } from 'service/genreFetcher';
// import { BASE_POSTER_URL } from 'service/starWarsAPI';
// import { ShortInfo, StyledItem, StyledItemPoster } from './MovieItem.styled';

// const MovieItem = ({ movie }) => {
//   const location = useLocation();

//   const { id, poster_path, title, release_date, genre_ids } = movie;
//   const genres = genreFetcher(genre_ids);

//   return (
//     <StyledItem key={id}>
//       <Link
//         state={{ from: location }}
//         to={`/movies/${id}`}
//         className="movie-title"
//       >
//         <div className="cover">
//           <StyledItemPoster
//             src={BASE_POSTER_URL + poster_path}
//             alt={title + ' poster'}
//           />
//           <p>{title}</p>
//           <p>
//             <ShortInfo>{extractYear(release_date)},</ShortInfo>{' '}
//             {genres.slice(0, 2).map((genre, index) => {
//               return (
//                 <ShortInfo key={index}>
//                   {genre}
//                   {index < genres.length - 1 ? ',' : ''}{' '}
//                 </ShortInfo>
//               );
//             })}
//           </p>
//         </div>
//       </Link>
//     </StyledItem>
//   );
// };

// export default MovieItem;
