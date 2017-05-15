import React, {Component} from "react";
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
          autoFocus={this.state.isEditingDisabled} disabled={this.state.isEditingDisabled}
          ref={input => this.nameInput = input}/>
        {
          this.state.isEditingDisabled
          ? <button className="actionButton editButton" onClick={this.editItem}></button>
          : <button className="actionButton saveButton" onClick={this.saveItem}></button>
        }
        <button className="actionButton doneTaskButton" onClick={this.handleToggleClick}/>
        <button className="actionButton deleteButton" onClick={this.deleteItem}/>
      </li>
    );
  }

  deleteItem = e => {
    this.props.deleteItem(this.props.index);
  };

  handleToggleClick = () => {
    if (!this.state.isEditingDisabled) {
      this.setState(prevState => ({
        isEditingDisabled: !prevState.isEditingDisabled
      }));
    }

    this.props.markItem(this.props.index, this.props.item.isDone);
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

    if (this.nameInput.value.trim() === this.props.item.name) {
      console.log("String is not updated");
      return;
    }

    if (this.nameInput.value.trim().length > 0) {
      this.props.updateItem(this.props.index, this.nameInput.value);
    } else {
      alert("Please enter some task to add");
      this.nameInput.value = this.props.item.name;
    }
  };
}
