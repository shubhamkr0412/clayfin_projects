import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className='main'><div className='container'>
      <form>
      <label for="fname">First Name</label>
  <input type="text" id="fname" name="firstname" placeholder="Your name.." />
  <label for="lname">Last Name</label>
  <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
  <label for="lname">PassWord</label>
  <input type="password" id="lname" name="lastname" placeholder="Enter your password.."/>
  <label for="lname">MobileNo</label>
  <input type="number" id="lname" name="lastname" placeholder="Enter your mobile no..."/>
  <div style={{margin:"auto", width:"100px"}}><button>Submit</button></div>

  


      </form>
    </div></div>
    )
  }
}
