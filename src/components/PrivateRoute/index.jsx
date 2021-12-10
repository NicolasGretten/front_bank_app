import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {navigate} from "@reach/router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (!id) {
      navigate('/login').then();
    }
  }, [id]);

  return <Component {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
