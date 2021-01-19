import React, { useState } from "react";

// props: createTodo from App
function Form(props) {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (event) => {
    console.log('change')
    setNewTodo(event.target.value);
  }

  const handleSubmit = (event) => {
    console.log('submit');
    event.preventDefault();
    props.createTodo(newTodo);  
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
