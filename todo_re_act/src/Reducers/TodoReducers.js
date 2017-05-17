
import { ADD_TODO, UPDATE_TODO, TOGGLE_TODO, DELETE_TODO } from '../Actions/TodoActions.js'
import GenerateId from '../Utility/IdGenerator.js';

const todoItems = (state = [], action) => {
    switch (action.type) {

        case ADD_TODO:
            return [
                ...state,
                {
                    id: GenerateId(),
                    name: action.name,
                    isDone: false
                }
            ]

        case UPDATE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        name: action.name
                    })
                }
                return todo;
            })

        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        isDone: !todo.isDone
                    })
                }
                return todo;
            })

        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);

        default:
            return state
    }
}

export default todoItems;