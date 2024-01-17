import InputTodo from './components/InputTodo'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import TodoList from './components/TodoList';
function App() {
  return (
    <center>
      <h1>Todo App</h1>
      <InputTodo></InputTodo>
      <TodoList/>
    </center>
  );
}
export default App
