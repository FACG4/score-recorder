import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


import './style.css';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h2>Hi I'm the home page</h2>
        <Link to="/info">
          <button>Start</button>
        </Link>
      </div>
    )
  }
}

export default HomePage;