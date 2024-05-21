import React from "react";
import "./person.css";

const Person = (props) => {
  
  return (
    <div className="main">
      {/* <h1>revision</h1> */}
      {props.name}
      <br />
      {props.Sname}
      <br />
      {props.salary}
      <br />
      {props.age}
      <br />
      {props.id}
    </div>
  );
};

export default Person;
