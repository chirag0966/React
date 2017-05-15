import React from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem.js';

const TodoList = (props) => (
    <ul className="todo-list">{
        props.items.map((item, index) =>
            <TodoItem key={index} index={index} item={item} deleteItem={props.deleteItem} updateItem={props.updateItem} markItem={props.markItem} />
        )}
    </ul>
);

export default TodoList;
