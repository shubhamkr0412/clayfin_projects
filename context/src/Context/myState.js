import React from "react";
import MyContext from "./myContext";
import { useState } from "react";

 const MyState = (props) => {
    // const s1={
    //     "mode":true,
    //     "load":"Hiii",
    // }
    const s3={
        "name":"Anu"
    }
    const [mode, setMode] = useState(true);
    const  handleUpdate = () => {
      setMode(!mode)
       };
  return (<MyContext.Provider value={{mode ,handleUpdate,s3}}>{props.children}</MyContext.Provider>);
};

export default MyState;