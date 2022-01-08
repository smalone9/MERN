import React, { Component } from 'react';
import RouterComponent from './router/RouterComponent';

import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <RouterComponent />
      </div>
    );
  }
}

export default App;
