import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import placeholder from '../../images/no-image.png';
import {
  Image,
  Wrapper,
  BtnLink,
  BtnList,
  Text,
  InfoBlock,
} from './MovieData.styled';

const API_URL_IMG = `https://image.tmdb.org/t/p/original`;

const MovieData = ({ data }) => {
  const { poster_path, title, name, vote_average, overview, genres } = data;

  const getNamesFromGenres = genres => {
    if (genres) {
      const genresName = genres.map(genre => genre.name);
      return genresName.join(', ');
    }
    return;
  };

  return (
    <div>
      <Wrapper>
        <Image
          src={poster_path ? API_URL_IMG + poster_path : placeholder}
          alt={title ?? name}
        />
        <div>
          <h1>{title ?? name}</h1>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{getNamesFromGenres(genres)}</p>
        </div>
      </Wrapper>
      <InfoBlock>
        <Text>Additional information</Text>
        <BtnList>
          <li>
            <BtnLink to="cast">Cast</BtnLink>
          </li>
          <li>
            <BtnLink to="reviews">Reviews</BtnLink>
          </li>
        </BtnList>
      </InfoBlock>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

MovieData.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};

export default MovieData;
