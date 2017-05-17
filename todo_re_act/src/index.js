import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '././TodoApp/TodoApp';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todos from '././Reducers/TodoReducers'
import './index.css';

const store = createStore(todos);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
