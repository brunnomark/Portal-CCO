import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PublicPages = ({ component: Component, logged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (!logged ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/Home', state: { from: props.location } }}
        />
      ))
      }
    />
  );
}

PublicPages.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default PublicPages;