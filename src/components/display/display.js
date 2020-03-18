import React from 'react';
import PropTypes from 'prop-types';

import './display.css';

const Display = ({ value }) => (
  <div className="display">{value}</div>
);

Display.defaultProps = {
  value: '0',
};

Display.propTypes = {
  value: PropTypes.string,
};

export default Display;
