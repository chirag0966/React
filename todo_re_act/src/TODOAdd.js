
import React, { Component } from 'react';
import './TODOApp.css';

class TODOAdd extends Component {
    render() {
        return <form className="AddItemForm">
            <label>task to do</label>
            <input type="text">
            </input>
            <button type="submit">Add</button>
        </form>
    }
}

export default TODOAdd;