import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM} from '../actions/todoList.actions';

const initialState = {
    todoList: ['prueba1','prueba2']
}

const reducer = (state = initialState, action) => {
    const newTodoList = [...state.todoList, action.payload]
    switch (action.type) {

        case ADD_ITEM:{

            return {...state, todoList: newTodoList }
        }
    
        default:{
            return state
        }
    }
}

export default reducer;