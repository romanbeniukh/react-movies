import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

const FilmsItem = ({ film }) => (
  <Link to={`/movie/${film.id}`}>
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
};

export default FilmsItem;
