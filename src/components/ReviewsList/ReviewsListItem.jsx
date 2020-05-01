import React from 'react';
import T from 'prop-types';

const ReviewsListItem = ({ author, text }) => (
  <div className="reviews-item__wrap">
    <span className="reviews-item__name">{author}</span>
    <span className="reviews-item__text">{text}</span>
  </div>
);

ReviewsListItem.propTypes = {
  author: T.string.isRequired,
  text: T.string.isRequired,
};

export default ReviewsListItem;
