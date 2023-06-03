import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../API';

import Section from '../components/Section';
import MoviesList from '../components/MoviesList';
import HandleError from '../components/HandleError';
import LoadMoreBtn from '../components/LoadMoreBtn';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

    const fetchMovies = async () => {
      try {
        const response = await fetchTrendingMovies(page);
        if (response.length === 0) setError(true);

        setMovies(prev => [...prev, ...response]);
      } catch (error) {
        setError(true);
        console.error(error.message);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <>
      <Section title="Trending today">
        {!error && (
          <>
            <MoviesList movies={movies} />{' '}
            <LoadMoreBtn onClick={() => setPage(prev => prev + 1)} />
          </>
        )}
      </Section>
      {error && (
        <HandleError title="Sorry, an error occurred :( Try reloading the page." />
      )}
    </>
  );
};

export default HomePage;
