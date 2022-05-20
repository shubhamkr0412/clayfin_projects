import React from "react";
import myContext from "./myContext";

export const myState = (props) => {
    const state={
        "mode":"Welcome"
    }
  return <myState.provider value={state}>{props.children}</myState.provider>;
};
