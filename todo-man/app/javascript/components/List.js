import React from 'react';
import Todo from './Todo';

// props: todos from App
function List(props) {
  const todoList = props.todos.map((todo) => {
    // console.log(todo);
    return (
      <Todo key={todo.id} todo={todo} removeTodo={props.removeTodo} toggleComplete={props.toggleComplete} />
    );
  })

  const handleClear = (event) => {
    props.clearTodos()
  }

  return (
    <div className="todo-list">
      {todoList}
      <button onClick={handleClear} >Clear</button>
    </div>
  )
}


export default List;