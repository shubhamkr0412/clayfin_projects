import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      lname:"",
      email:"",
      password:"",
      num:"",
nameE:false,
    };

  }
 
 
  handleLname = (e) => {
    
    this.setState({ lname: e.target.value  })
    console.log(this.state.lname);
  };
  handlePass = (e) => {
    
    this.setState({ password: e.target.value  })
    console.log(this.state.password);
  };
  handleNo = (e) => {
  
    this.setState({ num: e.target.value  })
    console.log(this.state.num);
  };
  render() {
    this.handleName = (e) => {
 
      this.setState({ name: e.target.value  })
      let regex = /^[A-Z]([0-9a-zA-Z]){2,10}$/;
      if(regex.test(this.state.name )  ){
        this.setState({ nameE: " "  })
       
      }
     
      else {
        this.setState({ nameE: "Invalid Name "  })
      }
    };
    
    return (
      <div className="main">
        <div className="container">
          <form>
            <label for="fname">First Name</label>
            <input
             onChange={this.handleName}
              className="inp"
            
              
              name="firstname"
              placeholder="Your name.."
            />  <label for="lname">{this.state.nameE}</label>
            
        

          
            
            <label for="lname">Last Name</label>
            <input
              onBlur={this.handleLname}
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <label for="lname">PassWord</label>
            <input
              onChange={this.handlePass}
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Enter your password.."
            />
            <label for="lname">MobileNo</label>
            <input
              onChange={this.handleNo}
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Enter your mobile no..."
            />
            <div style={{ margin: "auto", width: "100px" }}>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
