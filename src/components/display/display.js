import React from 'react';
import PropTypes from 'prop-types';

import './display.css';

const Display = ({ total, next, operation }) => (
  <div className="display">{operation ? next : total}</div>
);

Display.defaultProps = {
  total: '0',
  next: null,
  operation: null,
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
