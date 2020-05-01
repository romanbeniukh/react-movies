import React, { lazy, Suspense } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import ReactLoader from 'react-loader-spinner';
import { Route, Switch, withRouter } from 'react-router-dom';

const Cast = lazy(() => import('../layouts/Cast/Cast'));
const Reviews = lazy(() => import('../layouts/Reviews/Reviews'));
const Similar = lazy(() => import('../layouts/Similar/Similar'));

const MovieRoute = ({ match }) => (
  <Suspense fallback={<ReactLoader type="ThreeDots" color="#ccc" width={80} height={80} />}>
    <Switch>
      <Route exact path={`${match.path}/cast`} component={Cast} />
      <Route exact path={`${match.path}/reviews`} component={Reviews} />
      <Route exact path={`${match.path}/similar`} component={Similar} />
    </Switch>
  </Suspense>
);

MovieRoute.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default withRouter(MovieRoute);
