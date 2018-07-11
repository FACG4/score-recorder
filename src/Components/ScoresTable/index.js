import React, { Component} from 'react';

import './style.css';

class ScoreTable extends Component {

  render() {
    return (
      <div>
<<<<<<< HEAD
=======
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
>>>>>>> d3841ae7677164eb5e826db513d310f477c7ced6
      </div>
    )
  }
}

export default ScoreTable;
