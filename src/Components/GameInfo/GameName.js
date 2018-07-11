import React , { Component } from 'react';

// import './style.css';

class GameName extends Component {

  render() {
    return (
      <div>
        <h2 className='gameName'>Enter Game Name</h2>
        <input type="text" placeholder="Enter the game name"/>
      </div>
    )
  }
}

export default GameName;