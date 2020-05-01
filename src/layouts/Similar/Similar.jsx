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
      const similarArr = data.results.slice(0, 5);

      if (similarArr.length) {
        this.setState({ similar: similarArr });
      } else {
        this.setState({ similar: null });
      }
    });
  };

  render() {
    const { similar } = this.state;

    return (
      <Section title="Similar">
        {similar !== null ? <FilmsList films={similar} /> : <span className="empty">No similar</span>}
      </Section>
    );
  }
}

export default Similar;
