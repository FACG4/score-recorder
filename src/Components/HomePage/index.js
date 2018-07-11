import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


import './style.css';

class HomePage extends Component {

  render() {
    return (
      <div className="home-page">
        <h2 className="title">ScoreRecorder</h2>
        <p>Keep your scores tracked</p>
        <Link to="/info">
          <button>Start</button>
        </Link>
      </div>
    )
  }
}

export default HomePage;