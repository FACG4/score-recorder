import React, { Component } from 'react';

import './style.css';

class AllPlayers extends Component {
  render() {
    return (
      <div>
        <h3>No. of players</h3>
        <input type="number" min="2" max="8"/>
        <ul>
          <li><input type="text" placeholder="Enter player name"/></li>
          <li><input type="text" placeholder="Enter player name"/></li>
          <li><input type="text" placeholder="Enter player name"/></li>
          <li><input type="text" placeholder="Enter player name"/></li>
        </ul>
      </div>
    )
  } 
}

export default AllPlayers;