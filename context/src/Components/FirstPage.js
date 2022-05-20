import React from 'react'
import  "../App.css";
import { useContext } from 'react'
import myContext from '../Context/myContext'
export const FirstPage = () => {
    const d=useContext(myContext);
  
  return (
    <div className="container"  id={d.mode ? "light" : "darkLight"}>
    <h1>{d.s3.name}</h1>
    
   
    <button onClick={d.handleUpdate}>Change Theme</button>
    </div>
  )
}
