import React, { Component } from "react";
import "./TodoItem.css";

export default class TodoItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditingDisabled: true
    };
  }

  componentDidUpdate() {
    if (!this.state.isEditingDisabled) {
      this.nameInput.focus();
    }
  }

  render() {
    const isDoneClassName = this.props.item.isDone ? "itemLabel listItemDone" : "itemLabel listItemNotDone";
    return (
      <li className="myListItem">
        <input className={isDoneClassName} type="text" defaultValue={this.props.item.name}
          disabled={this.state.isEditingDisabled}
          ref={input => this.nameInput = input} />
        {
          this.state.isEditingDisabled
            ? <button className="actionButton editButton" onClick={this.editItem}></button>
            : <button className="actionButton saveButton" onClick={this.saveItem}></button>
        }
        <button className="actionButton doneTaskButton" onClick={this.toggleIsDoneStatus} />
        <button className="actionButton deleteButton" onClick={this.deleteItem} />
      </li>
    );
  }

  deleteItem = () => {
    this.props.deleteItemById(this.props.item.id);
  };

  toggleIsDoneStatus = () => {
    if (!this.state.isEditingDisabled) {
      this.setState({ isEditingDisabled: true });
    }

    this.props.updateTaskItemById(this.props.item.id, { isDone: !this.props.item.isDone });
  };

  editItem = () => {
    this.setState({ isEditingDisabled: false });
  };

  saveItem = () => {

    this.setState({ isEditingDisabled: true });

    if (this.nameInput.value.trim() === this.props.item.name) {
      console.log("String is not updated");
      return;
    }

    if (this.nameInput.value.trim().length > 0) {
      this.props.updateTaskItemById(this.props.item.id, { name: this.nameInput.value });
    } else {
      alert("Please enter some task to add");
      this.nameInput.value = this.props.item.name;
    }
  };
}
