
import React, { Component } from 'react';
 import { Route, Link } from 'react-router-dom';

import './Style.css';


class WinnerPage extends Component {
 

  render() {
    return (
      <div className= 'backgroung-image App'>
        <div className='overlay'>

           <div className='header'>
            <div className='container-logo-name'>
              <div className='logo' />
              <div className='app-name'>ScoreRecorder</div>
            </div>
           </div>


      <div className="container">
       <h1 className="gameName">Game One</h1>
          <div className="crownImage">
            <img className="stars" src={require('./crown.png')} alt="Smiley face" />
         </div>
         <p className="congrat">Congratulations</p>
          <p className="winnerName">Johana</p>

          <div className="stars">
           <div className="star1 " >
            <img src={require('./star.png')}   alt=""/>
           </div>

          <div className="scoreNoDiv">
           <p className="scoreNo">30</p>
          </div>

          <div className="star2">
           <img  src={require('./star.png')}  alt="" />
          </div>

          </div>
  </div>
  <button className="Re-play" onClick= {this.handleSubmit} >Replay</button>
  <div></div>
  <button className="Start" onClick= {this.handleSubmit} >start</button>
  <Link to="/HomePage">
          
       </Link>

        </div>
      </div>
    );
  }

}
export default WinnerPage;























