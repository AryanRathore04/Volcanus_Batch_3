import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(Math.random(), title, description);
    alert(`Your To do has been added...`);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <div className="container text-center my-5">
        <form onSubmit={submitHandler}>
          title :{" "}
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
          description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn btn-warning mx-3">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
