import React, { Component } from 'react';
import './TodoAdd.css';

class TodoAdd extends Component {

    addItem = (e) => {
        e.preventDefault();

        if (this.inputTaskName.value.trim().length > 0) {
            this.props.addItem(this.inputTaskName.value.trim())
            this.inputTaskName.value = '';
        } else {
            alert("Please enter some task to add");
        }
    };

    render() {
        return <form className="addItemForm">
            <input
                className="taskInput"
                type="text"
                placeholder="Task to do"
                ref={(input) => this.inputTaskName = input}
            ></input>
            <button className="taskAddButton" type="submit" onClick={this.addItem}>+</button>
        </form>
    }
}

export default TodoAdd;