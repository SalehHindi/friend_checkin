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
        <h1>What would you like to do?</h1>
        <div className="button-groups">
          <Link to="/transcriptions" className="top-button">
            <img src={exploreImage} alt="Explore Previous Sessions" />
            <span>Explore Previous Sessions</span>
          </Link>
          <div className="bottom-buttons">
            <button className="bottom-button">
              <img src={trackMoodImage} alt="Track Mood" />
              <span>Track Mood</span>
            </button>
            <button className="bottom-button button-right">
              <img src={exploreActivities} alt="Explore Activities" />
              <span>Explore Activities</span>
            </button>
          </div>
        </div>
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