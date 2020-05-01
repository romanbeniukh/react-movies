import React from 'react';
import T from 'prop-types';
import CastListItem from './CastListItem';

const CastList = ({ cast }) => (
  <ul className="cast-list">
    {cast.map(item => (
      <li className="cast-list__item cast-item" key={item.id}>
        <CastListItem
          photo={
            item.profile_path
              ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
              : 'https://www.genesisglobalschool.edu.in/wp-content/uploads/2016/09/noimage.jpg'
          }
          name={item.name}
        />
      </li>
    ))}
  </ul>
);

CastList.propTypes = {
  cast: T.arrayOf(
    T.shape({
      id: T.number,
      profile_path: T.string,
      name: T.string,
    }).isRequired,
  ).isRequired,
};

export default CastList;
