import React, { Component } from 'react';

import Header from './Header';
import GameName from './GameName';
import AllPlayers from './AllPlayers';
import ScoreTable from './ScoresTable';

class App extends Component {
  state = {
    gameName: '',
    numberOfPlayers: 0,
    numberOfPlayers:[],
    selectedId: 0
  }

  render() {
    return (
      <div className="App">
        <Header />
        <GameName />
        <AllPlayers />
        <ScoreTable />
        <button>Next</button>
      </div>
    );
  }
}

export default App;