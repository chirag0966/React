import React, { Component } from 'react';
import './TodoItem.css';

export default class TodoItem extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isDone: props.isDone,
			isEditingDisabled: true,
			editedItemValue: this.props.name
		};

		this.itemIndex = props.itemIndex;
	}

	deleteItem = (e) => {
		e.preventDefault();

		this.props.deleteItem(this.itemIndex);
	}

	render() {
		let isDoneClassName = this.state.isDone ? "itemLabel listItemDone" : "itemLabel listItemNotDone";
		return <li className="myListItem">
			<input className={isDoneClassName} type="text" value={this.state.editedItemValue} disabled={this.state.isEditingDisabled}
				onChange={this.updateEnteredItemValue}></input>
			{this.state.isEditingDisabled
				? <button className="actionButton editButton" onClick={this.editItem}></button>
				: <button className="actionButton saveButton" onClick={this.saveItem}></button>}
			<button className="actionButton doneTaskButton" onClick={this.handleToggleClick}></button>
			<button className="actionButton deleteButton" onClick={this.deleteItem}></button>
		</li>;
	}

	handleToggleClick = () => {
		this.setState(prevState => ({
			isDone: !prevState.isDone
		}));
	};

	updateEnteredItemValue = (e) => {
		this.setState({ editedItemValue: e.target.value });
	};

	editItem = () => {
		this.setState(prevState => ({
			isEditingDisabled: !prevState.isEditingDisabled
		}));
	};

	saveItem = () => {
		this.setState(prevState => ({
			isEditingDisabled: !prevState.isEditingDisabled
		}));
	};
}