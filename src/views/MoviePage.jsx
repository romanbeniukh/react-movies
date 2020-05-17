import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import movie from '../api/movie';
import Movie from '../components/Movie/Movie';
import Section from '../layouts/Section/Section';
import MovieRoute from '../routes/MovieRoute';
import CustomAlert from '../components/Alert/CustomAlert';
import scrollToTop from '../helpers/scrollToTop';

class MoviePage extends Component {
  static propTypes = {
    match: ReactRouterPropTypes.match.isRequired,
  };

  state = {
    id: '',
    movieInfo: [],
    isError: false,
    errorMessage: '',
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

    movie
      .getMovieDetails(id)
      .then(data => {
        this.setState({ movieInfo: data });
      })
      .catch(error => {
        this.setState({
          isError: true,
          errorMessage: error.message,
        });
      })
      .finally(() => scrollToTop());
  };

  closeAlert = () => {
    this.setState({
      isError: false,
    });
  };

  render() {
    const { movieInfo, isError, errorMessage } = this.state;

    return (
      <>
        {isError && <CustomAlert isAlert={isError} closeAlert={this.closeAlert} message={errorMessage} />}
        <Section title={`${movieInfo.title}`}>
          <Movie movie={movieInfo} />
          <MovieRoute />
        </Section>
      </>
    );
  }
}

export default MoviePage;
