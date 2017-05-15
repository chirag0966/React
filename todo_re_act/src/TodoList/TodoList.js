import React from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem.js';

const TodoList = (props) => (
    <ul className="todo-list">{
        props.items.map((item, index) =>
            // Pass props using ...(spread operator) as it is.
            <TodoItem key={index} index={index} item={item} {...props} />
        )}
    </ul>
);

export default TodoList;
