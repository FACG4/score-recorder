import React, { Component} from 'react';
import { Route, Link } from 'react-router-dom';

import './style.css';

class ScoreTable extends Component {

  render() {
    return (
      <div>
        <h2>Game One</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
          {this.props.players.map(player => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </table>
        <Link to="/info">
          <button>End</button>
        </Link>
      </div>
    )
  }
}

export default ScoreTable;
