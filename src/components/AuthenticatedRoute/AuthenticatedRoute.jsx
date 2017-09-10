import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const isAuthenticated = false;

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/signin'
        }}
        />
      )
    )}
  />
);

AuthenticatedRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]).isRequired
};

export default AuthenticatedRoute;
