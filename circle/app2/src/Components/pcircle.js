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

{this.props.data!== undefined ? 
  <div className="details">
      <div>
          <img src={this.props.data.img} />
      </div>
      <div>
          <h3>{"Name : "+this.props.data.price}</h3>
          <h3>{"Price : "+this.props.data.Category}</h3>
          <h3>{"Category : "+this.props.data.title}</h3>
      </div>                
  </div>        
  : ""}