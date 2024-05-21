import React from "react";
import Person from "./components/Person";

const App = () => {
  const person = [
    {name:'superman',salary:1000},
    {name:'spiderman',salary:2000},
    {name:'superman',salary:1000},
    {name:'superman',salary:1000},
    {name:'superman',salary:1000},
    {name:'superman',salary:1000},
    {name:'superman',salary:1000},
    {name:'superman',salary:1000},
    {name:'superman',salary:1000},
  ]
  return (
    <>
      {person.map((data) => (
        <Person
          key={Math.random()}
          name={data.name}
          salary={data.salary}
          id={Math.random()}
          age="12"
          Sname="adiya"
        />
      ))}
    </>
  );
};

export default App;
