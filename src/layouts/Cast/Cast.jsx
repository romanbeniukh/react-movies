import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import movie from '../../api/movie';
import CastList from '../../components/CastList/CastList';
import Section from '../Section/Section';

class Cast extends Component {
  static propTypes = {
    match: ReactRouterPropTypes.match.isRequired,
  };

  state = {
    id: this.props.match.params.id,
    cast: [],
  };

  componentDidMount() {
    this.getMovieCast();
  }

  getMovieCast = () => {
    const { id } = this.state;

    movie.getMovieCast(id).then(data => {
      const cast = data.slice(0, 10);

      this.setState({
        cast: cast.length ? cast : [],
      });
    });
  };

  render() {
    const { cast } = this.state;
    return (
      <Section title="Cast">{cast.length ? <CastList cast={cast} /> : <span className="empty">No cast</span>}</Section>
    );
  }
}

export default Cast;
