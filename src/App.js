import { useState } from "react";
import "./App.css";
const makeCaptcha = () => {
  const randomChars = "ABCabdewadsad123123234DDFEFs";
  let captcha = "";
  for (let i = 0; i < 5; i++) {
    captcha += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return captcha;
};

const App = () => {
  const [captcha, setCaptcha] = useState(makeCaptcha());
  const [value, setValue] = useState("");

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const regenerateCaptcha = (e) => {
    e.preventDefault();
    setCaptcha(makeCaptcha());
    setValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === captcha) {
      alert("Sign in successful");
    } else {
      alert("Captcha is invalid. Please try again.");
      setCaptcha(makeCaptcha());
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Simple Signup form</h1>
      <h2>Enter the captcha:</h2>
      <label class="captcha">{captcha}</label>
      <input type="text" value={value} onChange={inputHandler} />
      <div>
        <button type="submit">Submit</button>
        <button onClick={regenerateCaptcha}>Refresh</button>
      </div>
    </form>
  );
};

export default App;
