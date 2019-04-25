export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

const addToList = payload => ({
    type: ADD_ITEM,
    payload
})

const deleteToList = payload => ({
    type: DELETE_ITEM,
    payload
})

const updateToList = (payload) => ({
    type: UPDATE_ITEM,
    payload
})

export { addToList, deleteToList, updateToList };