import React from 'react'
import './Home.scss';
import PrayerTime from './PrayerTime/PrayerTime'

const Home = props => {
  return (
    <div className="container">
        <PrayerTime />
        <div className="hi">
            hello
        </div>
    </div>
  );
};

export default Home;