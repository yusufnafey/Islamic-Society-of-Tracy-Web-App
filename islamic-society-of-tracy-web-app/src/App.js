import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import Navigation from './Navigation/Navigation'
import Home from './Home/Home'
import About from './About/About'


class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/contact" component={Contact} /> */}
        {/* <Route path="/donate" component={Donate} /> */}
        {/* <Route path="/events" component={Events} /> */}
        {/* <Route path="/prayer_times" component={PrayerTimes} />  */}
        {/* <Route path="/forms" component={Forms} />  */}
      </div>
    );
  }
}

export default App;
