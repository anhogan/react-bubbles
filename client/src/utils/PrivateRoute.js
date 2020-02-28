import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem('token');

  return (
    <Route {...rest} render={(props) =>
      token ? (<Component {...props} />) : (<Redirect to="/api/login" />)
    } />
  );
};

export default PrivateRoute;