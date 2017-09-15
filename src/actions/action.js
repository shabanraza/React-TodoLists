import { createAction } from 'redux-act';


export const toggleComplete = createAction('TOGGLE_COMPLETE');
export const changeFilter = createAction('CHANGE_FILTER');
export const editItem = createAction('EDIT_ITEM');
export const deleteItem = createAction('DELETE_ITEM');
export const doneEditing = createAction('DONE_EDITING');
export const addtodo = createAction('ADD_TODO');

