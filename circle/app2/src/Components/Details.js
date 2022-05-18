import React, { Component } from 'react'
import "./Card.css";
export default class Details extends Component {
    constructor(props){
        super(props)
    }
  render() {
      console.log(this.props.single.title)
    return (
     <>
           {this.props.single.title !== undefined ? 
            <div className="details">
                <div>
                    <img src={this.props.single.img} />
                </div>
                <div>
                    <p>{"Name : "+this.props.single.title}</p>
                    <p>{"Price : "+this.props.single.price}</p>
                    <p>{"Category : "+this.props.single.Category}</p>
                </div>                
            </div>        
            : ""}
        </>
   
    )
  }
}
