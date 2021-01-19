import React from 'react';

// props: todo from List, toggleComplete from List
function Todo(props) {
  // console.log(props.todo.name)
  const handleCheck = () => {
    props.toggleComplete(props.todo.id);
  }
  
  const handleRemove = () => {
    props.removeTodo(props.todo.id);
  }
  return (
      <div className="todo-item">
        <p>{props.todo.name}</p>
        <input type="checkbox" checked={props.todo.complete} onChange={handleCheck}/>
        <button type="button" onClick={handleRemove}>Delete</button>
      </div>
  )
}

export default Todo
