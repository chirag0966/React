import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

const TODO_ITEMS = ["Talk with a positive person.",
"Write down three good things that happened to you each day.",
"Laugh – even if you have to force it. The mere action of laughing releases endorphins.",
"Get some sun (or a happy light, if it’s a gray day.)",
"Move your body (walk, exercise) for 20 minutes or longer.",
"Walk a dog or pet an animal.",
"Ask for a hug from one person a day.",
"Call an old friend or relative.",
"Invest 30 minutes a day doing a hobby you enjoy and find relaxing.",
"Buy something new (even something small, like a new type of coffee."];

class ToDoItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = {isDone: props.isDone};

		this.name = props.name;
		this.time = props.time;
		this.handleDeleteClick = props.onDeleteItem;

		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	render() {
		let isDoneClassName = this.state.isDone ? "listItemDone" : "listItemNotDone";
		return <li className="myListItem">
		<div className={isDoneClassName} onClick={this.handleToggleClick}>{this.name}</div>
		<button className="deleteButton">delete</button>
		</li>;
	}

	handleToggleClick() {
		this.setState(prevState => ({
			isDone: !prevState.isDone
		}));
	}
}

class ToDoList extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {items: props.items}
  }

  listItems(items) {
  	return this.state.items.map((itemName, index) =>
  		<ToDoItem key={index} name={itemName} time={new Date()} isDone={false}/>
  	);
  }

  deleteToDoItem(index) {
	let updatedItemsList = this.state.items.remove(index); 
	this.setState({
		items: updatedItemsList
	});
}

  render() {
	return <ul className="ToDoList"> {this.listItems()} </ul>;
  }
}

ReactDOM.render(
	<ToDoList items={TODO_ITEMS}/>,
	document.getElementById('root')
);

export default ToDoList;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
