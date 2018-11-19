import React, { Component } from 'react';
import './App.scss';
import Navigation from './Navigation/Navigation'
import Home from './Home/Home'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Home />
      </div>
    );
  }
}

export default App;
