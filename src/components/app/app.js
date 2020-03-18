import React from 'react';

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
      <main>
        <Display value={value} />
        <ButtonDisplay />
      </main>
    );
  }
}

export default App;
