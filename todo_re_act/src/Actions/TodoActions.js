/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

/*
 * action creators
 */

export function addTodo(name) {
  return { type: ADD_TODO, name }
}

export function updateTodo(id, name) {
  return { type: UPDATE_TODO, id, name }
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id }
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id }
}