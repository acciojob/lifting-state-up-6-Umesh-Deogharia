import React, { useState } from "react";
import Todo from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Build a Todo App", completed: false },
    { id: 3, task: "Deploy to Heroku", completed: false },
  ]);

  const handleComplete = (id) => {
    // Update the todos state by marking the specific todo as completed
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      );
    });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <Todo todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
