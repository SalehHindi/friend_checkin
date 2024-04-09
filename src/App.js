import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Transcripts from './components/Transcripts.js';
import Transcript from './components/Transcript.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/transcripts" element={<Transcripts />} />
        <Route path="/transcript/:id" element={<Transcript />} />
      </Routes>
    </Router>
  );
};

export default App;