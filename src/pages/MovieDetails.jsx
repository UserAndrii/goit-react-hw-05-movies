import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { fetchMovieData } from '../API';
import BackLink from '../components/BackLink';
import MovieData from '../components/MovieData';
import HandleError from '../components/HandleError';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState();
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setError(false);
    const fetchMovies = async () => {
      try {
        const response = await fetchMovieData(movieId);
        if (response.length === 0) setError(true);
        setMovieData(response);
      } catch (error) {
        setError(true);
        console.error(error.message);
      }
    };

    fetchMovies();
  }, [movieId]);

  return (
    <div>
      <BackLink patch={backLinkLocationRef.current} />
      {movieData && <MovieData data={movieData} />}
      {error && <HandleError />}
    </div>
  );
};

export default MovieDetails;
