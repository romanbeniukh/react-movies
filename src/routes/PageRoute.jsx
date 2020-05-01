import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const Home = lazy(() => import('../views/HomePage'));
const Popular = lazy(() => import('../views/PopularPage'));
const TopRated = lazy(() => import('../views/TopRatedPage'));
const Search = lazy(() => import('../views/SearchPage'));
const Movie = lazy(() => import('../views/MoviePage'));

const PageRoute = () => (
  <div className="page-container">
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/top-rated" component={TopRated} />
        <Route exact path="/search" component={Search} />
        <Route path="/movie/:id" component={Movie} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div>
);

export default PageRoute;
