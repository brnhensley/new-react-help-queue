import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
  return (
    <div>
      <h2>Hey dipshit, {props.location.pathname} does not exist!</h2>
      <h3>Since typing in any random crap doesn't seem to be working for you maybe you'd like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;