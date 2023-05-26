import PropTypes from 'prop-types';
import MoviesListItem from '../MoviesListItem';
import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title, name, poster_path }) => (
        <MoviesListItem
          key={id}
          id={id}
          title={title}
          name={name}
          image={poster_path}
        />
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
