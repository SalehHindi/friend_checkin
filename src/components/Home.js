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
        <div>
          <h1>Create New Group</h1>
          <button class="button" onclick="alert('Button clicked!')">
            <img src="image.jpg"/>
          <div class="overlay">
              <div class="overlay-content">Click me</div>
          </div>
</button>
        </div>


      </div>

      <nav className="navbar">
        <Link to="/" className="navbar-button">
          <img src={homeImage} alt="Home" />
          <span>Home</span>
        </Link>
      </nav>
    </div>
  );
};

export default Home;