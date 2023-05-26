import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from '../../API';
import { List, Item, Wrapper, Author, Text } from './Reviews.styled';
import HandleError from '../HandleError';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

    const fetchMovies = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        if (response.length === 0) setError(true);
        setReviews(response);
      } catch (error) {
        setError(true);
        console.error(error.message);
      }
    };

    fetchMovies();
  }, [movieId]);

  return (
    <Wrapper>
      {reviews.length > 0 && (
        <List>
          {reviews.map(({ id, author, content }) => {
            return (
              <Item key={id}>
                <Author>Author: {author}</Author>
                <Text>{content}</Text>
              </Item>
            );
          })}
        </List>
      )}
      {error && (
        <HandleError title="Sorry, we don't have any reviews for this movie" />
      )}
    </Wrapper>
  );
};

export default Reviews;
