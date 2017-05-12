import React, { Component } from 'react';
import './TodoApp.css';
import TodoAdd from '../TodoAdd/TodoAdd.js';
import TodoList from '../TodoList/TodoList.js';

class TodoApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoItems: []
    };
  }

  addItem = (todoItem) => {
    const oldTodoItems = this.state.todoItems;
    oldTodoItems.push({name: todoItem, isDone: false});

    this.setState({ todoItems: oldTodoItems });
  };

  deleteItem = (index) => {
    const oldTodoItems = this.state.todoItems;
    oldTodoItems.splice(index, 1);

    this.setState({ todoItems: oldTodoItems });
  };

  updateItem = (index, taskName) => {
    const oldTodoItems = this.state.todoItems;
    oldTodoItems[index].name = taskName;

    this.setState({ todoItems: oldTodoItems });
  };

  markItem = (index, isDone) => {
    const oldTodoItems = this.state.todoItems;
    oldTodoItems[index].isDone = !isDone;

    this.setState({ todoItems: oldTodoItems });
  };

  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <h2>Todos'</h2>
        </div>
        <p className="appIntro">To add, edit, mark done or delete a task.</p>
        <TodoAdd items={this.state.todoItems} addItem={this.addItem} />
        <TodoList items={this.state.todoItems} deleteItem={this.deleteItem} updateItem={this.updateItem} markItem={this.markItem}/>
      </div>
    );
  }
}

export default TodoApp;
