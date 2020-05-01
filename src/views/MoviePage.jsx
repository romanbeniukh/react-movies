import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import movie from '../api/movie';
import Movie from '../components/Movie/Movie';
import Section from '../layouts/Section/Section';
import MovieRoute from '../routes/MovieRoute';

class MoviePage extends Component {
  static propTypes = {
    match: ReactRouterPropTypes.match.isRequired,
  };

  state = {
    id: '',
    movieInfo: {},
  };

  componentDidMount() {
    this.getFilmInfoWithNewId();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;

    if (prevProps.match.params.id !== match.params.id) {
      this.getFilmInfoWithNewId();
    }
  }

  getFilmInfoWithNewId = () => {
    this.getFilmId();
    setTimeout(() => this.getMovieDetails(), 0);
  };

  getFilmId = () => {
    const { match } = this.props;

    this.setState({ id: match.params.id });
  };

  getMovieDetails = () => {
    const { id } = this.state;

    movie.getMovieDetails(id).then(data => {
      this.setState({ movieInfo: data });
    });
  };

  render() {
    const { movieInfo } = this.state;
    const { match } = this.props;

    return (
      <Section title={`${movieInfo.title}`}>
        <Movie movie={movieInfo} match={match} />
        <MovieRoute match={match} />
      </Section>
    );
  }
}

export default MoviePage;
