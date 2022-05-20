import React, { Component } from "react";
import "./App.css";
import themeHoc from "./Components/themeHoc";

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameStatus:false,
      lname: "",
      email: "",
      emailStatus:"",
      password: "",
      passwordStatus:false,
      num: "",
      numStatus:false,
      nameE: "",
      lnamE: "",
      emailE: "",
      numE: "",
      passwordE: "",
      mode:true,
    };
  }

  render() {
    this.handleName = (e) => {
      this.setState({ name: e.target.value });
      let regex = /^[A-Z]([0-9a-zA-Z]){2,10}$/;
      if (regex.test(this.state.name)) {
        this.setState({ nameE: " " });
        this.setState({ nameStatus: true });
      } else {
        this.setState({ nameE: "invalid " });
      }
    };
    this.handleLname = (e) => {
      this.setState({ lname: e.target.value });
      let regexx = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
      if (regexx.test(this.state.lname)) {
        this.setState({ lnamE: " " });
        this.setState({ emailStatus: true });
      } else {
        this.setState({ lnamE: "invalid " });
      }
    };
    this.handleNo = (e) => {
      this.setState({ num: e.target.value });
      let regex = /^([0-9]){9}$/;
      if (regex.test(this.state.num)) {
        this.setState({ numE: " " });
        this.setState({ numStatus: true });
      } else {
        this.setState({ numE: "invalid " });
      }
    };
    this.handlePass = (e) => {
      this.setState({ password: e.target.value });
      let regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      if (regex.test(this.state.password)) {
        this.setState({ passwordE: " " });
        this.setState({ passwordStatus: true });
      } else {
        this.setState({ passwordE: "invalid " });
      }
    };
    this.handleSubmit=(e)=>{
      e.preventDefault();
      
      if(this.state.nameStatus && this.state.emailStatus && this.state.numStatus && this.state.passwordStatus){
alert("Form Submitted Succesfully")
      }
      else{
        alert("try filling the form correctly");
       
      }
    }
    console.log(this.props.mode);
    // this.handleUpdate = () => {
    //   this.setState({ mode: !this.state.mode });
    // };

    return (
     
        <div className="container"  id={this.props.mode ? "light" : "darkLight"} >
        <div style={{ margin: "auto", width: "100px" }}>
              <button  onClick={this.props.handleUpdate}>Change Theme</button>
            </div>
          <form>
            <label for="fname">First Name</label>
            <input
              onChange={this.handleName}
              className="inp"
              name="firstname"
              placeholder="Your name.."
            />
            <div>
           <label for="lname">{this.state.nameE}</label>
              
            </div>
            <label for="lname">Email</label>
            <input
              onChange={this.handleLname}
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Your email.."
            />
            <div>
              <label for="lname">{this.state.lnamE}</label>
            </div>
            <label for="lname">PassWord</label>
            <input
              onChange={this.handlePass}
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Enter your password.."
            />
            <div>
              <label for="lname">{this.state.passwordE}</label>
            </div>
            <label for="lname">MobileNo</label>
            <input
              onChange={this.handleNo}
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Enter your mobile no..."
            />
            <div>
              <label for="lname">{this.state.numE}</label>
            </div>
            <div style={{ margin: "auto", width: "100px" }}>
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
 
    );
  }
}
export default themeHoc(App)