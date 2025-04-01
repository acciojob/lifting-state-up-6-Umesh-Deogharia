import React, { useState } from "react";
import "./../styles/App.css";
import Todo from "./Todo";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false },
  ]);

  function handleComplete(id) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id? {...todo, completed:!todo.completed } : todo
      );
    });
    // console.log(todo);
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <h1> Parent Component </h1>
      <h2>Child Component</h2>
      <Todo handleComplete={handleComplete} todos={todos} />
    </div>
  );
};

export default App;
