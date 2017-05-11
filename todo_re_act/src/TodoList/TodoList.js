import React, {Component} from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem.js';

export default class TodoList extends Component {

    listItems() {
        return this
            .props
            .items
            .map((itemName, index) => <TodoItem key={index} itemIndex={index} name={itemName} isDone={false} deleteItem={this.props.deleteItem}/>);
    }

    render() {
        return <ul className="todo-list">
            {this.listItems()}
        </ul>;
    }
}