import React from 'react';
import T from 'prop-types';
import FilmsItem from './FilmsItem';

const FilmsList = ({ films }) => (
  <ul className="films-list">
    {films.map(film => (
      <li className="films-list__item" key={film.id}>
        <FilmsItem film={film} />
      </li>
    ))}
  </ul>
);

FilmsList.propTypes = {
  films: T.arrayOf(
    T.shape({
      id: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FilmsList;
