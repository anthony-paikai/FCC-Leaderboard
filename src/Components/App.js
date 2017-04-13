import React, { Component } from 'react';
import '../css/App.css';
import Board from './Board' ;

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://s3.amazonaws.com/freecodecamp/wide-social-banner.png" className="App-logo" alt="logo" />
          <h2>Free Code Camp Leaderboard</h2>
        </div>
          <Board name="board"/>
        <footer className="App-footer">
          <h4> Created by Anthony Paikai &copy; 2017</h4>
        </footer>
      </div>

    );
  }

}

export default App;
