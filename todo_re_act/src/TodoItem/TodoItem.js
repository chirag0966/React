import React, {Component} from "react";
import "./TodoItem.css";

export default class TodoItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editedItemValue: props.item.name,
      isEditingDisabled: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.name !== this.state.editedItemValue) {
      this.setState({editedItemValue: nextProps.item.name});
    }
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
        <input className={isDoneClassName} type="text" value={this.state.editedItemValue}
          autoFocus={this.state.isEditingDisabled} disabled={this.state.isEditingDisabled} onChange={this.updateEnteredItemValue}
          ref={input => { this.nameInput = input;}}/>
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

  updateEnteredItemValue = e => {
    this.setState({editedItemValue: e.target.value});
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

    if (this.state.editedItemValue.trim() === this.props.item.name) {
      console.log("String is not updated");
      return;
    }

    if (this.state.editedItemValue.trim().length > 0) {
      this.props.updateItem(this.props.index, this.state.editedItemValue);
    } else {
      this.setState({editedItemValue: this.props.item.name});
      alert("Please enter some task to add");
    }
  };
}
