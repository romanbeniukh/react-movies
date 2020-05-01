const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '4c70739ab1bc7f2c582885ab460406ce';

export const GET_POPULAR_MOVIES = (page = 1) => `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;
export const GET_TOP_RATED_MOVIES = (page = 1) => `${API_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`;
export const GET_SEARCHED_MOVIES = (query, page = 1) =>
  `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
export const GET_MOVIE_DETAILS = id => `${API_URL}/movie/${id}?api_key=${API_KEY}`;
export const GET_SIMILAR_MOVIES = id => `${API_URL}/movie/${id}/similar?api_key=${API_KEY}`;
export const GET_MOVIE_CAST = id => `${API_URL}/movie/${id}/credits?api_key=${API_KEY}`;
export const GET_MOVIE_REVIEWS = (id, page = 1) => `${API_URL}/movie/${id}/reviews?api_key=${API_KEY}&page=${page}`;
