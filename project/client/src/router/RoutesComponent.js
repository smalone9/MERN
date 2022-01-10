import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//Page
import HomePage from '../pages/HomePages';
import LoginPage from '../pages/LoginPage';

class RoutesComponent extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
      </div>
    );
  }
}

export default RoutesComponent;
