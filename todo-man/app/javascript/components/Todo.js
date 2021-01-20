import React, { useState } from 'react';
import axios from 'axios';

function Todo(props) {
  const removeTodo = (todoId) => {
    axios.delete(`/todos/${todoId}.json`);
  }

  const toggleCompletion = (id) => {
    axios.get(`/todos/${id}.json`)
      .then(response => {
        const newCompletion = !response.data.completion;
        axios.patch(`/todos/${id}.json`, {completion: newCompletion});
      });
  }

  const handleCheck = () => {
    toggleCompletion(props.todo.id);
  }
  
  const handleRemove = () => {
    removeTodo(props.todo.id);
  }

  return (
      <div className="todo-item">
        <p>{props.todo.name}</p>
        <input type="checkbox" checked={props.todo.completion} onChange={handleCheck}/>
        <button type="button" onClick={handleRemove}>Delete</button>
      </div>
  )
}

export default Todo
