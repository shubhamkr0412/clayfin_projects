import "./App.css";
import { useState } from "react";

export default function App() {
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

  return (
    <div className="App">
      <div className="stepper">
        {step.map((item, index) => (
          <div
            key={index}
            className={index === activeStep ? "ActiveStep" : "step"}
            onClick={() => setActiveStep(index)}
          >
            {item}
          </div>
        ))}
      </div>
      {activeStep === 0 && (
        <div className="container">
          {" "}
          <form>
            <label for="fname">First Name</label>
            <input className="inp" name="firstname" placeholder="Your name.." />
            <div>
              <label for="lname"></label>
            </div>
            <label for="lname">Email</label>
            <input
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Your email.."
            />
            <div>
              <label for="lname"></label>
            </div>
            <label for="lname">PassWord</label>
            <input
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Enter your password.."
            />
            <div>
              <label for="lname"></label>
            </div>
            <label for="lname">MobileNo</label>
            <input
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Enter your mobile no..."
            />
            <div>
              <label for="lname"></label>
            </div>
            <div style={{ margin: "auto", width: "100px" }}>
              <button onClick={handleSend}>Send</button>
            </div>
          </form>
        </div>
      )}
      {activeStep === 1 && (
        <div className="container">
          {" "}
          <form>
            <label for="fname">Second Name</label>
            <input className="inp" name="firstname" placeholder="Your name.." />
            <div>
              <label for="lname"></label>
            </div>
            <label for="lname">Email</label>
            <input
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Your email.."
            />
            <div>
              <label for="lname"></label>
            </div>
            <label for="lname">PassWord</label>
            <input
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Enter your password.."
            />
            <div>
              <label for="lname"></label>
            </div>
            <label for="lname">MobileNo</label>
            <input
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Enter your mobile no..."
            />
            <div>
              <label for="lname"></label>
            </div>
            <div style={{ margin: "auto", width: "100px" }}>
              <button onClick={handleSend}>Send</button>
            </div>
          </form>
        </div>
      )}
      {activeStep === 2 && (
        <div className="container">
          {" "}
          <form>
            <label for="fname">Third Name</label>
            <input className="inp" name="firstname" placeholder="Your name.." />
            <div>
              <label for="lname"></label>
            </div>
            <label for="lname">Email</label>
            <input
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Your email.."
            />
            <div>
              <label for="lname"></label>
            </div>
            <label for="lname">PassWord</label>
            <input
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Enter your password.."
            />
            <div>
              <label for="lname"></label>
            </div>
            <label for="lname">MobileNo</label>
            <input
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Enter your mobile no..."
            />
            <div>
              <label for="lname"></label>
            </div>
            <div style={{ margin: "auto", width: "100px" }}>
              <button onClick={handleLastSend} disabled={isDisable}>
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
