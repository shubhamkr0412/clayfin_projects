import logo from "./logo.svg";
import "./App.css";

import { FirstPage } from "./Components/FirstPage";
import MyState from "./Context/MyState";


function App() {
  return (
    <>
   <MyState>
     <FirstPage/>
   </MyState>
    </>
  );
}

export default App;
