import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import T from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const FilmsItem = ({ film, location }) => (
  <Link
    to={{
      pathname: `/movie/${film.id}`,
      state: { from: location },
    }}
  >
    <img
      className="films-list__poster"
      src={
        film.poster_path
          ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
          : 'https://www.genesisglobalschool.edu.in/wp-content/uploads/2016/09/noimage.jpg'
      }
      alt={film.original_title}
    />
    <p className="films-list__name">{film.title}</p>
  </Link>
);

FilmsItem.propTypes = {
  film: T.shape({
    id: T.number,
    poster_path: T.string,
    original_title: T.string,
    title: T.string,
  }).isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(FilmsItem);
