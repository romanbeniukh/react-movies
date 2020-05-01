import React from 'react';
import T from 'prop-types';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList = ({ reviews }) => (
  <ul className="reviews-list">
    {reviews.map(review => (
      <li className="reviews-list__item reviews-item" key={review.id}>
        <ReviewsListItem author={review.author} text={review.content} />
      </li>
    ))}
  </ul>
);

ReviewsList.propTypes = {
  reviews: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      author: T.string.isRequired,
      content: T.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReviewsList;
