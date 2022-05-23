import logo from "./logo.svg";
import "./App.css";

import { FirstPage } from "./Components/FirstPage";
import MyState from "./Context/MyState";
import Form from "./Components/Form";


function App() {
  return (
    <>
  
    <MyState>
    <Form/>
    
   </MyState> 
    </>
  );
}

export default App;
