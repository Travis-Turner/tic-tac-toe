import React, { Component } from 'react';
import { Gameboard } from './components/Gameboard';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
      gameInProgress: false,
      userChar: ''
    }
  }
  onSelectLetter = (e) => {
    const userChar = e.target.name;
    this.setState(() => ({ userChar }));
  }
  gameBeginValidation = (input) => {
    if (!this.state.userChar){
      this.setState(() => ({ error: 'Please select your game piece' }));
      return false;
    }
    if (input < 3 || input >= 10){
      this.setState(() => ({ error: 'Please select a dimension between 3 and 10.'}));
      return false;
    } else {
      this.setState(() => ({ error: '' }));
      return true;
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements[0].value;
    if(this.gameBeginValidation(input)){
      this.setState(() => ({ gameInProgress: true }));
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">  
          <h1 className="App-title">Tic Tac Toe</h1>
        </header>
          {
            this.state.gameInProgress 
                ? 
            <Gameboard /> 
                :
            <div>
              <p>SELECT YOUR FIGHTER:</p>
              <button name="X" onClick={this.onSelectLetter}>X</button>
              <button name="O" onClick={this.onSelectLetter}>O</button>
              <form onSubmit={this.onSubmit}>
                <input type="number" placeholder='Dimension' />
                <button>Play</button>
              </form>
            </div>
          }
          {this.state.error && <p>{this.state.error}</p>}
          
        
      </div>
    );
  }
}

export default App;
