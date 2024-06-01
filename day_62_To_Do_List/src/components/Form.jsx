import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(Math.random(),title,description)
    alert(`Your To do has been added...`);
    setTitle("")
    setDescription("")

  };

  return (
    <form onSubmit={submitHandler}>
      title :{" "}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      description:{" "}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
