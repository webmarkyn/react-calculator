import React from 'react';

import Button from '../button';

const ButtonDisplay = () => (
  <div>
    <div className="group group-1">
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="/" action />
    </div>
    <div className="group group-2">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" action />
    </div>
    <div className="group group-3">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" action />
    </div>
    <div className="group group-4">
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" action />
    </div>
    <div className="group group-5">
      <Button name="0" big />
      <Button name="." />
      <Button name="=" action />
    </div>
  </div>
);

export default ButtonDisplay;
