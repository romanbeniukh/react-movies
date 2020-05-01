import axios from 'axios';
import * as endpoint from './endpoits';

export default {
  getPopular: async page => {
    try {
      const { data } = await axios.get(endpoint.GET_POPULAR_MOVIES(page));
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getTopRated: async page => {
    try {
      const { data } = await axios.get(endpoint.GET_TOP_RATED_MOVIES(page));
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getSearched: async (query, page) => {
    try {
      const { data } = await axios.get(endpoint.GET_SEARCHED_MOVIES(query, page));
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
