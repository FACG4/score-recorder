import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { Route, Link } from 'react-router-dom'

import Header from '../Header';
import GameName from './GameName.js';
import './style.css';

// const WrappedLink = () => {
//   return (
//     <button>
//       <Link style={{display: 'block', height: '100%'}} />
//     </button>
//   )
// }

class GameInfo extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const players = [];
    const inputNames = serializeForm(e.target, {hash: true});
    Object.values(inputNames).map((item, i) => {
      const player = {
        name: item,
        id: i+1,
        score: 0
      }
      return players.push(player);
    })    
    this.props.addPlayers(players)
  }

  render() {
    const playersNo = this.props.playersNo;
    return (
      <div>
        <Header />
        <GameName />
        <h3>No. of players</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="number" min="0" max="8" onInput={this.props.playersInputs}/>
          <ul>
            {
              playersNo.map((x,i)=>(
                <li key={i}><input type="text" name={`player${i}`} placeholder="Enter player name" required/></li>
              ))
            }
          </ul>

          {/* <Route render={({ history}) => (
            <button
              onClick={() => { history.push('/score') }}
            >
          Click Me!
        </button>
          )} /> */}

          <button>
            Next
          </button>
          
        </form>
      </div>
    )
  } 
}

export default GameInfo;