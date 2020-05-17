import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import movie from '../../api/movie';
import FilmsList from '../../components/FilmsList/FilmsList';
import Section from '../Section/Section';

class Similar extends Component {
  static propTypes = {
    match: ReactRouterPropTypes.match.isRequired,
  };

  state = {
    id: this.props.match.params.id,
    similar: [],
  };

  componentDidMount() {
    this.getSimilarMovies();
  }

  getSimilarMovies = () => {
    const { id } = this.state;

    movie.getSimilarMovie(id).then(data => {
      const similar = data.slice(0, 5);

      this.setState({
        similar: similar.length ? similar : [],
      });
    });
  };

  render() {
    const { similar } = this.state;

    return (
      <Section title="Similar">
        {similar.length ? <FilmsList films={similar} /> : <span className="empty">No similar</span>}
      </Section>
    );
  }
}

export default Similar;
