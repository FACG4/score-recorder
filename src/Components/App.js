import React, { Component } from 'react';

import Header from './Header';
import GameName from './GameName';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    gameName: '',
    numberOfPlayers: 0,
    players:[],
    selectedId: 0,
    playerName: ''
    
  }
  this.handeleDecrement = this.handeleDecrement.bind(this);
  this.handeleIncrement = this.handeleIncrement.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this)
  this.handleGameNameChange = this.handleGameNameChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}
handleGameNameChange = (event)=>{
  event.preventDefault()
  this.setState({
   gameName:event.target.value
  })
}

handleInputChange = (event)=>{
  event.preventDefault()
  this.setState({
   playerName:event.target.value
  })
}
handeleIncrement(){
  this.setState({
    numberOfPlayers:this.state.numberOfPlayers +1

  })
}
handeleDecrement(){
  this.setState({
    numberOfPlayers:this.state.numberOfPlayers -1
  })
  
}
handleSubmit = (event)=>{
  event.preventDefault()
  const data = this.state
  console.log(JSON.stringify(data))

}

  render() {
    const { numberOfPlayers } = this.state;
    const numberOfInputs = [];
    for (let i=0; i<numberOfPlayers; i++) {
      numberOfInputs.push(
        <p>
          <input type="text"  placeholder='Enter Player Name' name ='playerName' onChange={this.handleInputChange} />
        </p>
      )
    }
    return (
      <div className="App">
      
        <Header />
        <div>
        <h2>Enter Game Name</h2>
        <input type="text" placeholder="Enter the game name" name='gameName' onChange={this.handleGameNameChange}/>
      </div>
        <p> playerName : {this.players}</p>
        <br></br>
        <form onSubmit = {this.handleSubmit} />
        {numberOfInputs}
       <div>
         <button  className = "onclick" onClick={this.handeleIncrement}>+</button>
         <button className = "onclick" onClick={this.handeleDecrement}>-</button>
       </div>
       <br></br>
        <p><button onClick= {this.handleSubmit} >Next</button></p>
    
      </div>
    );
  }
}
  export default App; 
  