import React from 'react';

import './app.css';

import Display from '../display';
import ButtonPanel from '../button-panel';
import calculate from '../../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(state => calculate(state, buttonName));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="app">
        <Display operation={operation} next={next || '0'} total={total || '0'} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
