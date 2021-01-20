import React, { useState } from "react";
import axios from 'axios';

function Form(props) {
  const [newTodo, setNewTodo] = useState('');

  const createTodo = (todoName) => {
    const todo = {
      name: todoName,
      completion: false
    };
    
    // const csrfToken = document.querySelector('[name=csrf-token]').content
    // axios.defaults.headers.post['X-CSRF-Token'] = csrfToken

    axios.post('/todos.json', todo )
    .then(response => {
      console.log(response);
    });
  }

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo(newTodo);  
    setNewTodo('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={newTodo}
          onChange={handleChange}
          placeholder="I am going to..."
          autoFocus
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
