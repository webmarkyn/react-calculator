import React from 'react';
import PropTypes from 'prop-types';

import './button-panel.css';

import Button from '../button';

const buttonList = [
  [
    { name: 'AC' },
    { name: '+/-' },
    { name: '%' },
    { name: '/', color: true },
  ],
  [
    { name: '7' },
    { name: '8' },
    { name: '9' },
    { name: 'X', color: true },
  ],
  [
    { name: '4' },
    { name: '5' },
    { name: '6' },
    { name: '-', color: true },
  ],
  [
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '+', color: true },
  ],
  [
    { name: '0', wide: true },
    { name: '.' },
    { name: '=', color: true },
  ],
];

const ButtonPanel = ({ handleClick }) => (
  <div className="button-panel">
    {buttonList.map((list, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className={`group group-${idx}`} key={idx}>
        {list.map(button => (
          <Button
            name={button.name}
            wide={button.wide}
            color={button.color}
            key={button.name}
            handleClick={handleClick}
          />
        ))}
      </div>
    ))}
  </div>
);

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
