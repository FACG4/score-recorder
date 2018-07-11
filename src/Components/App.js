import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


import Header from './Header';
// import GameName from './GameName';
// import AllPlayers from './AllPlayers';
import ScoreTable from './ScoresTable';
import HomePage from './HomePage';
import GameInfo from './GameInfo';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gameName: '',
      numberOfPlayers: 0,
      players:[{
        id:0,
        name: 'John',
        score: 0
      }],
      selectedId: 0,
      arr:[]
    }
    this.handlePlayersNo = this.handlePlayersNo.bind(this);
    this.addPlayers = this.addPlayers.bind(this);
  }

  handlePlayersNo(event) {
    this.setState({
      numberOfPlayers: event.target.value,
      arr:this.state.arr.length<event.target.value? this.state.arr.concat(1): this.state.arr.slice(1)
    })
  }

  addPlayers(value) {
    this.setState({
      players: this.state.players.concat(value)
    })
    // console.log('array',value);
    // value.map(player => {
    //   return this.setState({
    //     players: this.state.players.concat(player)
    //   })
    // })
  }

  // createContact(contact) {
  //   ContactsAPI.create(contact).then(contact => {
  //     this.setState(state => ({
  //       contacts: state.contacts.concat([ contact ])
  //     }))
  //   })
  // }
  

 

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          // <div>
          //   <h2>Hi I'm the home page</h2>
          //   <Link to="/info">
          //     <button>Start</button>
          //   </Link>
          // </div>
          <HomePage />
        )}/>
        <Route path="/info" render={() => (
          <div>
            {/* <Header />
            <GameName /> */}
            {/* <AllPlayers playersInputs={this.handlePlayersNo} playersNo={this.state.arr} addPlayers={this.addPlayers}/> */}
            <GameInfo playersInputs={this.handlePlayersNo} playersNo={this.state.arr} addPlayers={this.addPlayers}/>
          </div>
        )}/>
        <Route path="/score" render={() => (
          <div>
            <Header />
            <ScoreTable />
          </div>
        )}/>
      </div>
    );
  }
}

export default App;