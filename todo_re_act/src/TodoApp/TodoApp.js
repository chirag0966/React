import React from 'react';
import './TodoApp.css';
import TodoAdd from '../TodoAdd/TodoAdd.js';
import TodoList from '../TodoList/TodoList.js';

let TodoApp = () => {
  return (
    <div className="app">
      <div className="appHeader">
        <h2>Todos&#8217;</h2>
      </div>
      <p className="appIntro">To add, edit, mark done or delete a task.</p>
      <TodoAdd />
      <TodoList />
    </div>
  );
}

export default TodoApp;
