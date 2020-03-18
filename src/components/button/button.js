import React from 'react';
import PropTypes from 'prop-types';

const classes = (action, big) => {
  let properClasses = '';
  if (action) properClasses += 'action ';
  if (big) properClasses += 'big ';
  return properClasses;
};

const Button = ({ name, action, big }) => (
  <button type="button" className={classes(action, big)}>{name}</button>
);

Button.defaultProps = {
  action: false,
  big: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.bool,
  big: PropTypes.bool,
};

export default Button;
