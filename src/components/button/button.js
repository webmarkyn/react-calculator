import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const classes = action => {
  let properClasses = 'button ';
  if (action) properClasses += 'action ';
  return properClasses;
};

const Button = ({ name, color, wide }) => (
  <div className={wide ? 'button-container big' : 'button-container'}>
    <button type="button" className={classes(color)}>{name}</button>
  </div>
);

Button.defaultProps = {
  color: false,
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
