import React, { useState } from "react";
import data from "./Data";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  let history = useNavigate();

  const removeData = (Id) => {
    // console.log(Id);

    let index = data.map((item) => item.id).indexOf(Id);
    data.splice(index, 1);
    console.log(data);
    history("/");
  };
  const editData = (id,name,age) => {
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("age",age);
  };

  return (
    <div className="App">
      <h1>Team</h1>
      <table border="1" className="App">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th colspan="2">Action</th>
        </tr>
        {data.map((ele) => {
          return (
            <tr key={ele.id}>
              <td>{ele.name}</td>
              <td>{ele.age}</td>
              <td>
                {" "}
                <button onClick={() => removeData(ele.id)}>Delete</button>
              </td>
              <td>
                <Link to={`/editTable/${ele.id}`}>
                  <button onClick={()=>editData(ele.id,ele.name,ele.age)}>Edit</button>
                </Link>
              </td>
            </tr>
          );
        })}
      </table>
      <Link to="/create">
      <button>Create</button>
    </Link>
    </div>
  );
};

export default Home;
