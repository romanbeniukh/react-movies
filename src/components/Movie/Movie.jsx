import React from 'react';
import T from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import GoBack from '../GoBack/GoBack';

const Movie = ({ movie, match, location, history }) => {
  const handleGoBack = () => {
    if (location.state) {
      history.push(location.state.from);
      return;
    }

    history.push({
      pathname: '/popular',
    });
  };
  return (
    <>
      <GoBack handler={handleGoBack} title="go back" />
      <div className="movie-info">
        <div className="movie-info__img-wrap">
          <img
            className="movie-info__img"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                : 'https://www.genesisglobalschool.edu.in/wp-content/uploads/2016/09/noimage.jpg'
            }
            alt={movie.title}
          />
          <div className="movie-info__star-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
            <span className="movie-info__star-title">{movie.vote_average}</span>
          </div>
        </div>
        <div className="movie-info__info-wrap">
          <div className="movie-info__row">
            <span className="movie-info__title">Release date: </span>
            <span className="movie-info__text">{movie.release_date}</span>
          </div>
          <div className="movie-info__row">
            <span className="movie-info__title">Budget: </span>
            <span className="movie-info__text">{movie.budget}$</span>
          </div>
          <hr />
          <div className="movie-info__row">{movie.overview}</div>
          <hr />
          <div className="movie-info__link-wrap">
            <NavLink
              className="movie-info__link"
              activeClassName="movie-info__link--active"
              to={`${match.url}/similar`}
            >
              similar
            </NavLink>
            <NavLink className="movie-info__link" activeClassName="movie-info__link--active" to={`${match.url}/cast`}>
              cast
            </NavLink>
            <NavLink
              className="movie-info__link"
              activeClassName="movie-info__link--active"
              to={`${match.url}/reviews`}
            >
              reviews
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

Movie.propTypes = {
  movie: T.shape({
    poster_path: T.string,
    vote_average: T.number,
    release_date: T.string,
    budget: T.number,
    overview: T.string,
    title: T.string,
  }).isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Movie);
