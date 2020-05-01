import React from 'react';
import T from 'prop-types';

const CastListItem = ({ photo, name }) => (
  <div className="cast-item__wrap">
    <img className="cast-item__img" src={photo} alt="hello" />
    <span className="cast-item__title">{name}</span>
  </div>
);

CastListItem.propTypes = {
  photo: T.string.isRequired,
  name: T.string.isRequired,
};

export default CastListItem;
