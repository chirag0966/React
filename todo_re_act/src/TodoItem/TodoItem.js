import React, { Component } from "react";
import { connect } from 'react-redux';
import { updateTodo, toggleTodo, deleteTodo } from '../Actions/TodoActions.js'
import "./TodoItem.css";

class TodoItem extends Component {

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
        <button className="actionButton deleteButton" onClick={() => this.props.onDelete(this.props.item.id)} />
      </li>
    );
  }

  toggleIsDoneStatus = () => {
    if (!this.state.isEditingDisabled) {
      this.setState({ isEditingDisabled: true });
    }

    this.props.onToggle(this.props.item.id);
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
      this.props.onUpdate(this.props.item.id, this.nameInput.value);
    } else {
      alert("Please enter some task to add");
      this.nameInput.value = this.props.item.name;
    }
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id) => {
      dispatch(toggleTodo(id))
    },
    onDelete: (id) => {
      dispatch(deleteTodo(id))
    },
    onUpdate: (id, name) => {
      dispatch(updateTodo(id, name))
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);
