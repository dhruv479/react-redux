import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../store/actions/userAuth.actions";

export default function UserLogin() {
  const [InputField, setInputField] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUserAction(InputField));
  };
  const inputsHandler = (e) => {
    setInputField({ ...InputField, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>
        <h2>Log In</h2>
        <input
          type="email"
          value={InputField.email}
          name="email"
          onChange={inputsHandler}
          placeholder="Email Address"
        />
        <input
          type="password"
          value={InputField.password}
          name="password"
          onChange={inputsHandler}
          placeholder="Password"
        />
        <button type="submit" onClick={handleLogin}>
          Submit
        </button>
      </div>
    </div>
  );
}
