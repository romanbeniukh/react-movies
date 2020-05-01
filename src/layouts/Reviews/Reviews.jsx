import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import movie from '../../api/movie';
import Section from '../Section/Section';
import ReviewsList from '../../components/ReviewsList/ReviewsList';

class Reviews extends Component {
  static propTypes = {
    match: ReactRouterPropTypes.match.isRequired,
  };

  state = {
    id: this.props.match.params.id,
    reviews: [],
  };

  componentDidMount() {
    this.getMovieReviews();
  }

  getMovieReviews = () => {
    const { id } = this.state;

    movie.getMovieReviews(id).then(data => {
      const reviewsArr = data.results.slice(0, 10);

      if (reviewsArr.length) {
        this.setState({ reviews: reviewsArr });
      } else {
        this.setState({ reviews: null });
      }
    });
  };

  render() {
    const { reviews } = this.state;

    return (
      <Section title="Reviews">
        {reviews !== null ? <ReviewsList reviews={reviews} /> : <span className="empty">No reviews</span>}
      </Section>
    );
  }
}

export default Reviews;
