import axios from 'axios';
import * as endpoint from './endpoits';

export default {
  getMovieDetails: async id => {
    try {
      const { data } = await axios.get(endpoint.GET_MOVIE_DETAILS(id));
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getMovieCast: async id => {
    try {
      const { data } = await axios.get(endpoint.GET_MOVIE_CAST(id));
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getMovieReviews: async id => {
    try {
      const { data } = await axios.get(endpoint.GET_MOVIE_REVIEWS(id));
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getSimilarMovie: async id => {
    try {
      const { data } = await axios.get(endpoint.GET_SIMILAR_MOVIES(id));
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
