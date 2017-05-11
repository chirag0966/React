import React, {Component} from 'react';
import './TodoItem.css';

export default class TodoItem extends Component {

	constructor(props) {
		super(props);

		this.state = {isDone: props.isDone};
        
        this.itemIndex = props.itemIndex;
	}

    deleteItem = (e) => {
        e.preventDefault();

        this.props.deleteItem(this.itemIndex);
    }

	render() {
		let isDoneClassName = this.state.isDone ? "listItemDone" : "listItemNotDone";
		return <li className="myListItem">
		<div className={isDoneClassName} onClick={this.handleToggleClick}>{this.props.name}</div>
		<button className="editButton"></button>
		<button className="deleteButton" onClick={this.deleteItem}></button>
		</li>;
	}

	handleToggleClick = () => {
		this.setState(prevState => ({
			isDone: !prevState.isDone
		}));
	};
}