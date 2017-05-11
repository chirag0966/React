import React, {Component} from 'react';
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
    var oldTodoItems = this.state.todoItems;
    oldTodoItems.push(todoItem);

    this.setState({todoItems: oldTodoItems});
  };

  deleteItem = (index) => {
    if (index > -1) {
      this
        .state
        .todoItems
        .splice(index, 1);
    }
    this.setState({todoItems: this.state.todoItems});
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Todos'</h2>
        </div>
        <p className="App-intro">To add, edit, mark done or delete a task.</p>
        <TodoAdd items={this.state.todoItems} addItem={this.addItem}/>
        <TodoList items={this.state.todoItems} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default TodoApp;
