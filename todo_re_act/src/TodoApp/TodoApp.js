import React, { Component } from 'react';
import './TodoApp.css';
import TodoAdd from '../TodoAdd/TodoAdd.js';
import TodoList from '../TodoList/TodoList.js';
import GenerateId from '../Utility/IdGenerator.js';

class TodoApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoItems: []
    };
  }

  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <h2>Todos&#8217;</h2>
        </div>
        <p className="appIntro">To add, edit, mark done or delete a task.</p>
        <TodoAdd addItem={this.addItem} />
        <TodoList items={this.state.todoItems} deleteItemById={this.deleteItemById} updateTaskItemById={this.updateTaskItemById} />
      </div>
    );
  }

  // Helper Methods

  addItem = (todoItemName) => {
    const todoItems = this.state.todoItems;
    todoItems.push({ id: GenerateId(), name: todoItemName, isDone: false });

    this.setState({ todoItems: todoItems });
  };

  updateTaskItemById = (id, updates) => {
    const todoItems = this.state.todoItems;
    const index = todoItems.map((item) => item.id).indexOf(id);

    for (var key in updates) {
      todoItems[index][key] = updates[key];
    }

    this.setState({ todoItems: todoItems });
  };

  deleteItemById = (id) => {
    const todoItems = this.state.todoItems;
    const index = todoItems.map((item) => item.id).indexOf(id);

    todoItems.splice(index, 1);

    this.setState({ todoItems: todoItems });
  };

}

export default TodoApp;
