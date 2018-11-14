import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar'
import PrayerTime from './PrayerTime/PrayerTime'

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <PrayerTime />
      </div>
    );
  }
}

export default App;
