import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import pushToHistory from '../../helpers/pushToHistory';

class Search extends Component {
  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
  };

  state = {
    searchQuery: '',
  };

  handleChange = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchQuery } = this.state;
    const { history } = this.props;
    const route = `/search?q=${searchQuery}`;

    if (searchQuery) {
      pushToHistory(history, route);
    }

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <button type="submit" className="search-form__button">
            <span className="search-form__button-label">Поиск</span>
          </button>
          <input
            onChange={this.handleChange}
            name="searchQuery"
            value={searchQuery}
            className="search-form__input"
            type="text"
            autoComplete="off"
            placeholder="Enter some film name..."
          />
        </form>
      </>
    );
  }
}

export default withRouter(Search);
