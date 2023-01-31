import React, { useState, useEffect } from "react";
import Data from "../Data";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const EditTable = () => {
  const [inputField, setInputField] = useState({
    name: "",
    age: "",
  });
  const [id, setId] = useState();
  let history = useNavigate();

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitButton = (e) => {
    let a = Data[id];
     a.name=inputField.name;
     a.age=inputField.age;

    history("/");
  };

  useEffect(() => {
    let Id = localStorage.getItem("id");
    let name = localStorage.getItem("name");
    let age = localStorage.getItem("age");
    setId(Id);
    setInputField({ name: name, age: age });
  }, []);

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
      <button onClick={submitButton}>Update</button>
    </div>
  );
};

export default EditTable;
