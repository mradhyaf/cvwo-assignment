import React, { useState, useEffect } from 'react';
import Form from './Form.js';
import List from './List.js';

const LOCAL_TODO_KEY = 'todoApp.todos'
const KEY_HISTORY_KEY = 'todoKeys.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const [todoIds, setTodoIds] = useState([1]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_TODO_KEY));
    const storedIds = JSON.parse(localStorage.getItem(KEY_HISTORY_KEY));
    if (storedTodos) {setTodos(storedTodos)}
    if (todoIds.length > 1) {setTodoIds(storedIds)}
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_TODO_KEY, JSON.stringify(todos))
  }, [todos])

  const createTodo = (newTodo) => {
    console.log(typeof newTodo);
    // if (!newTodo.text || /^\s*$/.test(newTodo.text)) {
    //   console.log('unidentified input')
    //   return
    // }
    const currentTodos = todos.slice(0, todos.length);
    const newTodos = currentTodos.concat(
      [{id: todoIds, name: newTodo, complete: false}]);
    console.log(newTodos);
    setTodos(newTodos);
    setTodoIds(todoIds + 1);
  }

  const removeTodo = (todoId) => {
    const currentTodos = todos.slice(0, todos.length);
    const newTodos = currentTodos.filter(todo => todo.id !== todoId);
    setTodos(newTodos);
  }

  const toggleComplete = (id) => {
    const newTodos = todos.slice();
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  const clearTodos = () => {
    setTodos([]);
  }
  
  return (
    <div>
      <Form createTodo={(newTodo) => createTodo(newTodo)} />
      <List todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} clearTodos={clearTodos} />
    </div>
  )
}

export default App;
