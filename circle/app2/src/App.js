import React, { Component } from 'react'
import Card from './Components/Card';

export default class App extends Component {

  constructor() {
    super(); // mandate
    this.state = {
      lists: [],
     
   
   
    };
  }
  componentDidMount(){
    fetch(` https://myntradata.herokuapp.com/mens`)
    .then((d) => d.json())
    .then((res) => {
      this.setState({ lists: res  });
      
    });
  }
 

  render() {
   

    return (
      <Card  lists={this.state.lists}/>
    )
  }
}
