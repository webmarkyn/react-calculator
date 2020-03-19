import React from 'react';

import './app.css';

import Display from '../display';
import ButtonDisplay from '../button-panel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0',
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div className="app">
        <Display value={value} />
        <ButtonDisplay />
      </div>
    );
  }
}

export default App;
