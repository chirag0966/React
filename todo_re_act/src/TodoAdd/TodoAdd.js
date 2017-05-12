import React, { Component } from 'react';
import './TodoAdd.css';

class TodoAdd extends Component {

    constructor(props) {
        super(props);

        this.state = {
            enteredItemValue: ''
        };
    }

    addItem = (e) => {
        e.preventDefault();

        this.props.addItem(this.state.enteredItemValue)
        this.updateEnteredValue("");
    };

    updateTaskEntered = (e) => {
        e.preventDefault();

        this.updateEnteredValue(e.target.value);
    };

    updateEnteredValue(value) {
        this.setState({ enteredItemValue: value });
    }

    render() {
        return <form className="addItemForm">
            <input
                className="taskInput"
                type="text"
                placeholder="Task to do"
                value={this.state.enteredItemValue}
                onChange={this.updateTaskEntered}></input>
            <button className="taskAddButton" type="submit" onClick={this.addItem}>+</button>
        </form>
    }
}

export default TodoAdd;