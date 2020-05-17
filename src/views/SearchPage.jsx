import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import movies from '../api/movies';
import FilmsList from '../components/FilmsList/FilmsList';
import Pagination from '../components/Pagination/Pagination';
import scrollToTop from '../helpers/scrollToTop';
import Section from '../layouts/Section/Section';
import Search from '../components/Search/Search';
import CustomAlert from '../components/Alert/CustomAlert';

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
    isError: false,
    errorMessage: '',
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
    this.setState({ isError: false });
    movies
      .getSearched(searchQuery, page)
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
    const page = params.get(`page`);

    this.setState({
      page: page !== null ? Number(page) : 1,
    });
  };

  pushCurrentPageToUrl = currentPage => {
    const { match, history } = this.props;

    history.push(`${match.path}?q=${this.state.searchQuery}&page=${currentPage}`);
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
    const { films, page, totalPages, searchQuery, isError, errorMessage } = this.state;
    return (
      <>
        {isError && <CustomAlert isAlert={isError} closeAlert={this.closeAlert} message={errorMessage} />}
        {searchQuery === null ? (
          <Section title="Enter some film name">
            <Search />
          </Section>
        ) : (
          <Section title={`Search result for: ${searchQuery}`}>
            <FilmsList films={films} />
            {films.length && <Pagination currentPage={page} totalPages={totalPages} paginating={this.paginating} />}
          </Section>
        )}
      </>
    );
  }
}

export default SearchPage;
