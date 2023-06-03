import axios from 'axios';

const API_KEY = '58645e23389326a2e8ed75695b9e1b79';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async page => {
  const response = await axios.get(
    `/trending/all/day?api_key=${API_KEY}&page=${page}`
  );
  return response.data.results;
};

export const fetchSearchMovies = async (value, page) => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: page,
    include_adult: false,
    query: value,
  });

  const response = await axios.get(`/search/movie?${searchParams}`);
  return response.data;
};

export const fetchMovieData = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US'`
  );
  return response.data;
};

export const fetchMovieActors = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchMovieReviews = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: 1,
  });

  const response = await axios.get(`/movie/${id}/reviews?${searchParams}`);
  return response.data.results;
};
