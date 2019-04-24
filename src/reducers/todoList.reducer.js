import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM} from '../actions/todoList.actions';

const initialState = {
    todoList: []
}

var id = 0;

const reducer = (state = initialState, action) => {
    
    switch (action.type) {

        case ADD_ITEM:{
            id++
            action.payload.id = id

    console.log(id)
            const newTodoList = [...state.todoList, action.payload]
            return {...state, todoList: newTodoList}
        }

        case DELETE_ITEM:{
            const newTodoList = state.todoList.filter(task => (task.id!== action.payload))
            return {...state, todoList: newTodoList }
        }

        case UPDATE_ITEM:{

            return state
        }
    
        default:{
            return state
        }
    }
}

export default reducer;