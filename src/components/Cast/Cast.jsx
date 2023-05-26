import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieActors } from '../../API';
import { List, Image, Name, Character } from './Cast.styled';
import placeholder from '../../images/no-actors.png';
import HandleError from '../HandleError';

const API_URL_IMG = `https://image.tmdb.org/t/p/w300/`;

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

    const fetchMovies = async () => {
      try {
        const response = await fetchMovieActors(movieId);
        if (response.length === 0) setError(true);
        setActors(response);
      } catch (error) {
        setError(true);
        console.error(error.message);
      }
    };

    fetchMovies();
  }, [movieId]);

  return (
    <div>
      {actors.length > 0 && (
        <List>
          {actors.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <Image
                  src={profile_path ? API_URL_IMG + profile_path : placeholder}
                  alt={name}
                />
                <Name>{name}</Name>
                <Character>{character}</Character>
              </li>
            );
          })}
        </List>
      )}
      {error && <HandleError />}
    </div>
  );
};

export default Cast;
