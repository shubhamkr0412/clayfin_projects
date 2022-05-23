import "../App.css";

import { useContext } from "react";
import myContext from "../Context/myContext";
export default function Form() {
  const data = useContext(myContext);
  console.log(typeof data.step + "kislat");

  return (
    <div className="App">
      <div className="stepper">
        {data.step.map((item, index) => (
          <div
            key={index}
            className={index === data.activeStep ? "ActiveStep" : "step"}
            onClick={() => data.setActiveStep(index)}
          >
            {item}
          </div>
        ))}
      </div>
      {data.activeStep === 0 && (
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
              <button onClick={data.handleSend}>Send</button>
            </div>
          </form>
        </div>
      )}
      {data.activeStep === 1 && (
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
              <button onClick={data.handleSend}>Send</button>
            </div>
          </form>
        </div>
      )}
      {data.activeStep === 2 && (
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
              <button onClick={data.handleLastSend} disabled={data.isDisable}>
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
