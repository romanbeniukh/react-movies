import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import movies from '../api/movies';
import FilmsList from '../components/FilmsList/FilmsList';
import Pagination from '../components/Pagination/Pagination';
import scrollToTop from '../helpers/scrollToTop';
import Section from '../layouts/Section/Section';
import CustomAlert from '../components/Alert/CustomAlert';

export default class TopRatedPage extends Component {
  static propTypes = {
    location: ReactRouterPropTypes.location.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
  };

  state = {
    films: [],
    page: 1,
    totalPages: null,
    isError: false,
    errorMessage: '',
  };

  componentDidMount() {
    this.getTopRatedMovieWithPage();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (prevProps.location.search !== location.search) {
      this.getTopRatedMovieWithPage();
    }
  }

  getTopRatedMovieWithPage = () => {
    this.getCurrentPageFromUrl();
    setTimeout(() => this.getTopRatedMovies(), 0);
  };

  getTopRatedMovies = () => {
    const { page } = this.state;
    this.setState({ isError: false });
    movies
      .getTopRated(page)
      .then(data => {
        this.setState({
          films: data.results,
          totalPages: data.total_pages,
        });
      })
      .catch(error => {
        this.setState({
          isError: true,
          errorMessage: error.message,
        });
      })
      .finally(() => scrollToTop());
  };

  getCurrentPageFromUrl = () => {
    const { location } = this.props;
    const searchParam = location.search;
    const params = new URLSearchParams(searchParam);
    const page = params.get(`page`);

    this.setState({
      page: page !== null ? Number(page) : 1,
    });
  };

  pushCurrentPageToUrl = page => {
    const { match, history } = this.props;

    history.push(`${match.path}?page=${page}`);
  };

  paginating = page => {
    this.setState({ page });
    this.pushCurrentPageToUrl(page);
  };

  closeAlert = () => {
    this.setState({
      isError: false,
    });
  };

  render() {
    const { films, page, totalPages, isError, errorMessage } = this.state;

    return (
      <>
        {isError && <CustomAlert isAlert={isError} closeAlert={this.closeAlert} message={errorMessage} />}
        <Section title="Top rated">
          <FilmsList films={films} />
          <Pagination currentPage={page} totalPages={totalPages} paginating={this.paginating} />
        </Section>
      </>
    );
  }
}
