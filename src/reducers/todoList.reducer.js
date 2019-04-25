import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from '../actions/todoList.actions';

const initialState = {
    todoList: []
}

var id = 0;

const reducer = (state = initialState, action) => {
    let newTodoList
    switch (action.type) {

        case ADD_ITEM: {
            id++
            action.payload.id = id
            newTodoList = [...state.todoList, action.payload]
            return { ...state, todoList: newTodoList }
        }

        case DELETE_ITEM: {
            newTodoList = state.todoList.filter(task => (task.id !== action.payload))
            return { ...state, todoList: newTodoList }
        }

        case UPDATE_ITEM: {
            newTodoList = state.todoList.map(task => {
                if (task.id === action.payload.id) {
                    return action.payload
                }
                return task
            })
            return { ...state, todoList: newTodoList }
        }

        default: {
            return state
        }
    }
}

export default reducer;