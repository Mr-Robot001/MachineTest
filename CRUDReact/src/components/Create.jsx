import React, { useState } from "react";
import Data from "../Data";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [inputField, setInputField] = useState({
    name: "",
    age: "",
  });
  let history = useNavigate();

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitButton = () => {
    setInputField({ name: "", age: "" });
    let { name, age } = inputField;
    const Ids = uuid();
    let id = Ids.slice(0, 8);
    Data.push({ id, name, age });
    history('/')
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={inputsHandler}
        placeholder="Name"
        value={inputField.name}
      />

      <br />

      <input
        type="text"
        name="age"
        onChange={inputsHandler}
        placeholder="Age"
        value={inputField.age}
      />

      <br />
      <button onClick={submitButton}>Add</button>
    </div>
  );
};

export default Create;
