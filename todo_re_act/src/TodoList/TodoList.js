import React from 'react';
import TodoItem from '../TodoItem/TodoItem.js';
import { connect } from 'react-redux';
import './TodoList.css';

let TodoList = (props) => {
    return (<ul className="todo-list"> {
        props.todoItems.map((item, index) =>
            <TodoItem key={item.id} item={item} />
        )}
    </ul>)
};

const mapStateToProps = (state) => {
    return {
        todoItems: state
    }
};

TodoList = connect(mapStateToProps)(TodoList);

export default TodoList;
