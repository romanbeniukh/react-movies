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
      const reviews = data.slice(0, 10);

      this.setState({
        reviews: reviews.length ? reviews : [],
      });
    });
  };

  render() {
    const { reviews } = this.state;

    return (
      <Section title="Reviews">
        {reviews.length ? <ReviewsList reviews={reviews} /> : <span className="empty">No reviews</span>}
      </Section>
    );
  }
}

export default Reviews;
