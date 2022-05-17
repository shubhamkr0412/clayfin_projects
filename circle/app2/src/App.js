import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  constructor() {
    super(); // mandate
    this.state = {
      counter: 0,
   
    };
  }
  handleincrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  }
  handledecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

 
  render() {
 
    
    return (
      <div className='App'>
        <div style={{background:this.state.counter==0?"red":this.state.counter>0?"green":"yellow"}}className='circle'></div>
        <div > {this.state.counter}</div>
        <div ><button onClick={this.handleincrement}>Increment</button>
     
        <button onClick={this.handledecrement}>Decrement</button></div>
      </div>
    )
  }
}
