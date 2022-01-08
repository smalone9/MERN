import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter } from './RoutesComponent';

class RouterComponent extends Component {
  render() {
    const { user } = this.props || {};

    return (
      <Router basename="/">
        <div>
          <RoutesComponent user={user} />
        </div>
      </Router>
    );
  }
}

export default connect()(RouterComponent);
