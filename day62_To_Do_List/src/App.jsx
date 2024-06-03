import React, { useState } from "react";
import Todos from "./components/Todos";
import Form from "./components/Form";


const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Inception",
      description:
        "A skilled thief is given a chance at redemption if he can successfully perform an inception.",
    },
    {
      id: 2,
      title: "The Matrix",
      description:
        "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    },
  ]);
  const addTodo = (id, title, desc) => {
    const obj = {
      id,
      title,
      description: desc,
    };
    setTodos([...todos, obj]);
  };

  return (
    <>
    {/* <Child /> */}
      <Form addTodo={addTodo} />
      <div>
        {/* <div
          className="btn btn-warning"
          onClick={() =>
            addTodo(6, "infinity war", "one of the best marvel movie")
          }
        >
          AddTodo
        </div> */}

        <Todos todos={todos} />
      </div>
    </>
  );
};

export default App;
