import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../store/actions/userAuth.actions";

export default function UserRegister() {
  const [InputField, setInputField] = useState({
    email: "",
    name: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleRegister = () => {
    dispatch(registerUserAction(InputField));
  };
  const inputsHandler = (e) => {
    setInputField({ ...InputField, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>
        <h2>Register</h2>
        <input
          type="email"
          value={InputField.email}
          name="email"
          onChange={inputsHandler}
          placeholder="Email Address"
        />
        <input
          type="text"
          value={InputField.name}
          name="name"
          onChange={inputsHandler}
          placeholder="Username"
        />
        <input
          type="password"
          value={InputField.password}
          name="password"
          onChange={inputsHandler}
          placeholder="Password"
        />
        <button type="submit" onClick={handleRegister}>
          Submit
        </button>
      </div>
    </div>
  );
}
