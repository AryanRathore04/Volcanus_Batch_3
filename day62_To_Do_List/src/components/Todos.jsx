import React, { useState } from "react";
const Todos = ({todos}) => {
  
  return (
    <div className="container">
      {todos.map((todo) => (
        <div key={todo.id} className=" bg-dark p-3 my-3 text-center">
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
          <div>
            <button className="btn btn-warning mx-2">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
