import { useState, useEffect } from "react";

import Input from "../UI/Input";

import "./Form.css";

const reg = /\S+@\S+\.\S+/;
const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
    message: "",
  });

  const [errorMsg, setErrorMsg] = useState(null);

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const { name, email, mobile, country, city, state, message } = user;

  const submitHandler = (e) => {
    e.preventDefault();

    if (name.length === 0) return setErrorMsg("Name is Required");
    if (email.length === 0) return setErrorMsg("Email is Required");

    if (name.length < 3)
      return setErrorMsg("Name should have atleast 3 characters");

    if (!reg.test(email)) {
      return setErrorMsg("Invalid email");
    }

    alert("Form submitted see console");
    console.log(user);

    setUser({
      name: "",
      email: "",
      mobile: "",
      country: "",
      city: "",
      state: "",
      message: "",
    });
  };

  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => {
        setErrorMsg(null);
      }, 4000);
    }
  }, [errorMsg]);

  return (
    <div className="formStyle">
      {errorMsg !== null && <div className="errorMsg">{errorMsg}</div>}
      <header className="logo">Register Form</header>
      <form onSubmit={submitHandler} className="verifyForm">
        <div className="inputStyle">
          <Input
            label={"Name"}
            name="name"
            onChange={inputHandler}
            value={name}
          />
        </div>
        <div className="inputStyle">
          <Input
            label="Email"
            type="email"
            name="email"
            onChange={inputHandler}
            value={email}
          />
        </div>

        <div className="inputStyle">
          <Input
            label="Mobile Number"
            name="mobile"
            onChange={inputHandler}
            value={mobile}
          />
        </div>
        <div className="inputStyle">
          <Input
            label="Country"
            name="country"
            onChange={inputHandler}
            value={country}
          />
        </div>
        <div className="inputStyle">
          <Input
            label="City"
            name="city"
            onChange={inputHandler}
            value={city}
          />
        </div>

        <div className="inputStyle">
          <Input
            label="State"
            name="state"
            onChange={inputHandler}
            value={state}
          />
        </div>

        <div className="inputStyle">
          <Input
            label="Message"
            name="message"
            onChange={inputHandler}
            value={message}
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
