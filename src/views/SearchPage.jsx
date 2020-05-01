import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import movies from '../api/movies';
import FilmsList from '../components/FilmsList/FilmsList';
import Pagination from '../components/Pagination/Pagination';
import scrollToTop from '../helpers/scrollToTop';
import Section from '../layouts/Section/Section';
import Search from '../components/Search/Search';

class SearchPage extends Component {
  static propTypes = {
    location: ReactRouterPropTypes.location.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
  };

  state = {
    films: [],
    searchQuery: '',
    page: 1,
    totalPages: null,
  };

  componentDidMount() {
    this.getSearchedMovies();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location.search !== prevProps.location.search) {
      this.getSearchedMovies();
    }
  }

  getSearchedMovies = () => {
    this.setNewSearchQuery();
    this.getCurrentPageFromUrl();
    setTimeout(() => this.fetchSearchedMovies(), 0);
  };

  fetchSearchedMovies = () => {
    const { searchQuery, page } = this.state;
    movies
      .getSearched(searchQuery, page)
      .then(data => {
        this.setState({
          films: data.results,
          totalPages: data.total_pages,
        });
      })
      .finally(() => scrollToTop());
  };

  setNewSearchQuery = () => {
    const { location } = this.props;
    const searchParam = location.search;
    const params = new URLSearchParams(searchParam);
    const query = params.get(`q`);

    this.setState({
      searchQuery: query,
      page: 1,
    });
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

  pushCurrentPageToUrl = currentPage => {
    const { match, history } = this.props;

    history.push(`${match.path}?q=${this.state.searchQuery}&page=${currentPage}`);
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
    const { films, page, totalPages, searchQuery } = this.state;
    const { history } = this.props;
    return (
      <>
        {searchQuery === null ? (
          <Section title="Enter some film name">
            <Search history={history} />
          </Section>
        ) : (
          <Section title={`Search result for: ${searchQuery}`}>
            <FilmsList films={films} />
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              increment={this.incrementPage}
              decrement={this.decrementPage}
            />
          </Section>
        )}
      </>
    );
  }
}

export default SearchPage;
