import React from "react";
import "./App.css";
import { GoogleLogin } from "react-google-login";
const App = () => {
const responseGoogle=(response)=>{
  console.log(response);
}
const responseError=(error)=>{
  console.log(error);
}

  return (
    <div>
      <div className="App">
        {" "}
        <h1>Google Calender Api</h1>
      </div>
      <div>
        <GoogleLogin
          clientId="112204028961-ng9f0jub48d9tsiktsm8faopsrrsf550.apps.googleusercontent.com"
          buttonText="Sign in & Authorize Calender"
          onSuccess={responseGoogle}
          onFailure={responseError}
          cookiePolicy={"single_host_origin"}
          responseType="code"
          accessType="offline"
          scope="openid email profile https://www.googleapis.com/auth/calendar "
        />
      </div>
    </div>
  );
};

export default App;
