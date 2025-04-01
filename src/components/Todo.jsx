import React from 'react'

const Todo = ({ handleComplete , todos}) => {
  return (
    <div>
      {/* Parent */}
      <ul>
        {todos.map(todo =>(
          <li key ={todo.id}>
            {todo.text}
            {!todo.completed && (
              <button onClick={()=>handleComplete(todo.id)} style={{marginLeft:'10px'}}>Complete</button>
          )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo
