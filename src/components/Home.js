import React from 'react';
import { Link } from 'react-router-dom';
import exploreImage from './sessions.png';
import trackMoodImage from './mood.png';
import exploreActivities from './activites.png';
import homeImage from './Home.png';

const Home = () => {
  return (
    <div className="home">
      <div className="main">


      </div>

      <nav className="navbar">
        <Link to="/" className="navbar-button">
          <img src={homeImage} alt="Home" />
          <span>Home</span>
        </Link>
        <Link to="/transcripts" className="navbar-button">
          <img src={exploreImage} alt="Sessions" />
          <span>Sessions</span>
        </Link>
        <Link className="navbar-button">
          <img src={trackMoodImage} alt="Mood Analysis" />
          <span>Mood Analysis</span>
        </Link>
        <Link className="navbar-button">
          <img src={exploreActivities} alt="Activities" />
          <span>Activities</span>
        </Link>
      </nav>
    </div>
  );
};

export default Home;