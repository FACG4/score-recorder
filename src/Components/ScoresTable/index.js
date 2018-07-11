import React, { Component} from 'react';

import './style.css';

class ScoreTable extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.game}</h2>
      </div>
    )
  }
}

export default ScoreTable;
