import React, { Component } from "react";
import "./Card.css";
import Details from "./Details";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pro: {},
    };
  }
  handleChange = (e) => {

    this.setState({ pro: e  })
    
    }


   

    


  render() {
    
    return (
  
      <>
      <Details/>
        <div className="containerr">
          {this.props.lists.map((curr) => {
            return (
              <>
                <div className="inside" key={curr.id}>
                  <div className="items">
                    <img width={"60%"} src={curr.img} />
                  </div>
                  <div className="items">
                    <p>
                      <span>Name:</span>
                      {curr.title}
                    </p>
                  </div>
                  <div className="items">
                    <p>
                      <span>Category:</span>
                      {curr.Category}
                    </p>
                  </div>
                  <div className="items">
                    {" "}
                    <p>
                      <span>Price:</span>
                      {curr.price}
                    </p>
                  </div>
                  <div className="items">
                    {" "}
                    <p></p>
                  </div>
                  <div className="items">
                    <button key={curr.id}
                   onClick={ () => this.handleChange(curr) }  
                    >
                      Click Me
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
