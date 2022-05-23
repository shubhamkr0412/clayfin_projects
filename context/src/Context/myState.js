import React from "react";
import MyContext from "./myContext";
import { useState } from "react";

const MyState = (props) => {
  const [mode, setMode] = useState(true);
  const [step, setStep] = useState([1, 2, 3]);
  const [activeStep, setActiveStep] = useState(0);
  const [formValue1, setFormValu1] = useState("");
  const [formValue2, setFormValu2] = useState("");
  const [formValue3, setFormValu3] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const [isView, setIsView] = useState(false);

  const handleSend = () => {
    setActiveStep(activeStep + 1);
  };

  const handleLastSend = () => {
    setIsDisable(true);
  };

  const viewAll = () => {
    setIsView(true);
  };
  const handleUpdate = () => {
    setMode(!mode);
  };
  console.log(activeStep)
  return (
    <MyContext.Provider
      value={{
        mode,
        handleUpdate,
        step,
        activeStep,
        setActiveStep,
        formValue1,
        formValue2,
        formValue3,
        isDisable,
        isView,
        handleLastSend,
        handleSend,
        viewAll
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
