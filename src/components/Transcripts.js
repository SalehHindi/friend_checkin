import React from 'react';
import { Link } from 'react-router-dom';
import exploreImage from './sessions.png';
import trackMoodImage from './mood.png';
import exploreActivities from './activites.png';
import homeImage from './Home.png';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDateElements = () => {
  const today = new Date();
  const dateElements = [];
  for (let i = 0; i < 7; i++) {
    let day = new Date();
    day.setDate(today.getDate() - today.getDay() + i);
    dateElements.push({
      date: day.getDate(),
      day: weekdays[day.getDay()]
    });
  }
  return dateElements;
};

const Transcripts = () => {
  const dateElements = getDateElements();

  return (
    <div className="home">
      <div className="main">
        <h1>Here are our previous chats</h1>

        <div className="data-bar">
          <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="date-list">
          {dateElements.map((element, index) => (
            <div key={index} className="date-item">
              <span className="date-number">{element.date}</span>
              <span className="date-day">{element.day}</span>
            </div>
          ))}
        </div>


        <div className="transcript-list">
          <div className="transcript-group">
            <div className="transcript-header">
              <img className="transcript-header-image" src={exploreImage} alt="Session" />
              <span>Monday, Jan 8th</span>
            </div>

            <div className=" transcript-item">
              <p>In this discussion, you seemed to begin to feel sad when you mentioned your childhood. In this discussion, you seemed to begin to feel sad when you mentioned your childhood In this discussion, you seemed to begin to feel sad when you mentioned your childhood In this discussion, you seemed to begin to feel sad when you mentioned your childhood In this discussion, you seemed to begin to feel sad when you mentioned your childhood In this discussion, you seemed to begin to feel sad when you mentioned your childhood In this discussion, you seemed to begin to feel sad when you mentioned your childhood In this discussion, you seemed to begin to feel sad when you mentioned your childhood</p>
            </div>
          </div>


          <div className="transcript-group">
            <div className="transcript-header">
              <img className="transcript-header-image" src={exploreImage} alt="Session" />
              <span>Tuesday, Jan 9th</span>
            </div>

            <div className=" transcript-item">
              <p>In this discussion, you seemed to begin to feel sad when you mentioned your childhood</p>
            </div>
          </div>


          <div className="transcript-group">
            <div className="transcript-header">
              <img className="transcript-header-image" src={exploreImage} alt="Session" />
              <span>Thursday, Jan 11th</span>
            </div>

            <div className=" transcript-item">
              <p>In this discussion, you seemed to begin to feel sad when you mentioned your childhood</p>
            </div>
          </div>


          <div className="transcript-group">
            <div className="transcript-header">
              <img className="transcript-header-image" src={exploreImage} alt="Session" />
              <span>Friday, Jan 12th</span>
            </div>

            <div className=" transcript-item">
              <p>In this discussion, you seemed to begin to feel sad when you mentioned your childhood</p>
            </div>
          </div>



          
        </div>
      </div>

      <nav className="navbar">
        <Link to="/" className="navbar-button">
          <img src={homeImage} alt="Home" />
          <span>Home</span>
        </Link>
        <Link to="/transcriptions" className="navbar-button">
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


export default Transcripts;