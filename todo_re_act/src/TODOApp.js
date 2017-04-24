import React, { Component } from 'react';
import '././TODOApp.css';
import TODOAdd from './TODOAdd.js';

class TODOApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TODOs'</h2>
        </div>
        <p className="App-intro">
          To add, edit, mark done or delete a task.
        </p>
        <TODOAdd/>
      </div>
    );
  }
}

export default TODOApp;
