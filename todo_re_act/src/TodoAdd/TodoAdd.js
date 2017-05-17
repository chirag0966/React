import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Actions/TodoActions';
import './TodoAdd.css';

let TodoAdd = ({ dispatch }) => {

    let inputTaskName

    const addTodoItem = (e) => {
        e.preventDefault()

        const trimmedTaskName = inputTaskName.value.trim();

        if (trimmedTaskName.length > 0) {
            dispatch(addTodo(trimmedTaskName));
            inputTaskName.value = '';
        } else {
            alert("Please enter some task to add");
        }
    };

    return (
        <div>
            <form className="addItemForm" onSubmit={addTodoItem}>
                <input className="taskInput" type="text" placeholder="Task to do"
                    ref={node => { inputTaskName = node }} />
                <button className="taskAddButton" type="submit">+</button>
            </form>
        </div>
    )
};
TodoAdd = connect()(TodoAdd)

export default TodoAdd