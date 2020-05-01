import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import movies from '../api/movies';
import FilmsList from '../components/FilmsList/FilmsList';
import Pagination from '../components/Pagination/Pagination';
import scrollToTop from '../helpers/scrollToTop';
import Section from '../layouts/Section/Section';

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

    movies
      .getTopRated(page)
      .then(data => {
        this.setState({
          films: data.results,
          totalPages: data.total_pages,
        });
      })
      .finally(() => scrollToTop());
  };

  getCurrentPageFromUrl = () => {
    const { location } = this.props;
    const searchParam = location.search;
    const params = new URLSearchParams(searchParam);
    const query = params.get(`page`);

    if (query !== null) {
      this.setState({ page: Number(query) });
    } else {
      this.setState({ page: Number(1) });
    }
  };

  pushCurrentPageToUrl = page => {
    const { match, history } = this.props;

    history.push(`${match.path}?page=${page}`);
  };

  incrementPage = page => {
    const currentPage = page + 1;
    this.setState({ page: currentPage });
    this.pushCurrentPageToUrl(currentPage);
  };

  decrementPage = page => {
    const currentPage = page - 1;
    this.setState({ page: currentPage });
    this.pushCurrentPageToUrl(currentPage);
  };

  render() {
    const { films, page, totalPages } = this.state;

    return (
      <>
        <Section title="Top rated">
          <FilmsList films={films} />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            increment={this.incrementPage}
            decrement={this.decrementPage}
          />
        </Section>
      </>
    );
  }
}
