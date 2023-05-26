import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../API';

import Section from '../components/Section';
import MoviesList from '../components/MoviesList';
import HandleError from '../components/HandleError';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

    const fetchMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        if (response.length === 0) setError(true);
        setMovies(response);
      } catch (error) {
        setError(true);
        console.error(error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Section title="Trending today">
        <MoviesList movies={movies} />
      </Section>
      {error && (
        <HandleError title="Sorry, an error occurred :( Try reloading the page." />
      )}
    </>
  );
};

export default HomePage;
