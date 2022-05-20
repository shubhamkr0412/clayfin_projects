import React, { Component } from "react";
import  "../App.css";
const themeHoc = (OrigComponent, incVar) => {
    return class extends React.Component {
      constructor(props) {
        super(props);
  
        this.state = {
          mode: true,
        };
      }
      /*whats the prob in the output ...
      is it sharing this state variable and inc of clickCounter impacts BlurCounter's count
      */
  
      handleUpdate = () => {
       return  this.setState({ mode: !this.state.mode });
      };

      render() {
        return (
          <OrigComponent
            
        
            {...this.props}
            mode={this.state.mode}
            handleUpdate={this.handleUpdate}
          />
        );
        /*
         
         
        pass {...this.props to carry orig props along with new props} 
        when we maintained state in APP prev..
        
        this wont work now as we dont have any state or func in APP
        so pass state and func from HOC to Comp*/
      }
    };
  };
  export default themeHoc;