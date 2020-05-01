import React from 'react';

const HomePage = () => (
  <section className="home">
    <img
      className="home__img"
      src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
      alt="the-movie-img"
    />
    <h1 className="home__title">Welcome!</h1>
    <span className="home__text">This web application based on React with using TMDB api.</span>
  </section>
);

export default HomePage;
