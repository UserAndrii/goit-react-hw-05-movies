import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import Search from '../components/Search';
import { fetchSearchMovies } from '../API';
import Section from 'components/Section/Section';
import MoviesList from 'components/MoviesList/MoviesList';
import HandleError from 'components/HandleError/HandleError';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    const searchValue = searchParams.get('query');

    if (!searchValue) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      try {
        const response = await fetchSearchMovies(searchValue, pages);
        const { results, total_pages } = response;

        if (results.length === 0) setError(true);

        setMovies(prev => [...prev, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        setError(true);
        console.error(error.message);
      }
    };

    fetchMovies();
  }, [pages, searchParams]);

  const handleFormSubmit = value => {
    setMovies([]);
    setPages(1);
    setTotalPages(1);
    if (value === searchParams.get('query')) {
      return toast.error(
        'You have already searched for this keyword. Please try another one.'
      );
    }
    setSearchParams({ query: value });
  };

  return (
    <>
      <Search onSubmit={handleFormSubmit} />
      {movies.length > 0 && (
        <Section title="List of movies by keyword:">
          <MoviesList movies={movies} />
          {pages < totalPages && (
            <LoadMoreBtn onClick={() => setPages(prev => prev + 1)} />
          )}
        </Section>
      )}
      {error && <HandleError />}
    </>
  );
};

export default MoviesPage;
