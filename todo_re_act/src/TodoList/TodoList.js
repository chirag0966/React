import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem.js';

export default class TodoList extends Component {

    listItems() {
        return this
            .props
            .items
            .map((item, index) => <TodoItem key={index} itemIndex={index} item={item}
                deleteItem={this.props.deleteItem}
                updateItem={this.props.updateItem}
                markItem={this.props.markItem}
            />);
    }

    render() {
        return <ul className="todo-list">
            {this.listItems()}
        </ul>;
    }
}