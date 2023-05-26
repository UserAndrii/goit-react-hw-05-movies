import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Item, Image, Title, MovieLink } from './MoviesListItem.styled';
import placeholder from '../../images/no-image.png';

const API_URL_IMG = `https://image.tmdb.org/t/p/original`;

const MoviesListItem = ({ id, title, name, image }) => {
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'movies' : location.pathname;

  // console.log(location);

  return (
    <Item>
      <MovieLink to={`${currentPage}/${id}`} state={{ from: location }}>
        <Image
          src={image ? API_URL_IMG + image : placeholder}
          alt={title ?? name}
          loading="lazy"
        />
        <Title>{title ?? name}</Title>
      </MovieLink>
    </Item>
  );
};

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};

export default MoviesListItem;
