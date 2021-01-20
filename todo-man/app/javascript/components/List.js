import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Todo from './Todo';

function List(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/todos.json')
      .then( response => {
        setTodos(response.data)
      } )
  });

  const todoList = todos.map((todo) => {
    return (
      <Todo key={todo.id} todo={todo} />
    );
  })

  return (
    <div className="todo-list">
      {todoList}
    </div>
  )
}


export default List;