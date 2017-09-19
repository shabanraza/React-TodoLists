import {List, Map, fromJS} from 'immutable';
import  { toggleComplete ,changeFilter,editItem, 
	doneEditing,deleteItem,addtodo} from '../src/actions/action'
import {expect} from 'chai';

import reducer from '../src/reducer/reducer';
import {compose, createStore,applyMiddleware} from 'redux';

describe('reducer', () => {
  
   let initialState = {
      todos: [
          {id: 1, text: 'React', status: 'active',editing:false},
          {id: 2, text: 'Redux', status: 'active',editing:false},
          {id: 3, text: 'Immutable', status: 'active',editing:false},
        ],
        filter:'all'
    }
    let store = createStore(reducer);


  it('handles TOGGLE_COMPLETE by changing the status from active to completed', () => {
    const state = {
      ...initialState
    }
    const action = {
      type: 'TOGGLE_COMPLETE',
      itemId: 1
    }
    store.dispatch(toggleComplete(action.itemId))
    expect(store.getState()).deep.equal({
      todos: [
          {id: 1, text: 'React', status: 'completed',editing:false},
          {id: 2, text: 'Redux', status: 'active',editing:false},
          {id: 3, text: 'Immutable', status: 'active',editing:false},
        ],
        filter:'all'
    });
  });

  it('handles TOGGLE_COMPLETE by changing the status from completed to active', () => {
    let state = {...store.getState()};
    state.todos[0].status = 'active';
    state.todos[1].status = 'active';
    state.todos[2].status = 'completed';
       
    const action = {
      type: 'TOGGLE_COMPLETE',
      itemId: 3
    }
    store.dispatch(toggleComplete(action.itemId))
    expect(store.getState()).deep.equal({
      todos: [
          {id: 1, text: 'React', status: 'active',editing:false},
          {id: 2, text: 'Redux', status: 'active',editing:false},
          {id: 3, text: 'Immutable', status: 'active',editing:false},
        ],
        filter:'all'
    });
  });

  it('handles CHANGE_FILTER by changing the filter', () => {
    let state = {...store.getState()};
    state.todos[0].status = 'active';
    state.todos[1].status = 'active';
    state.todos[2].status = 'completed';
       
    const action = {
      type: 'CHANGE_FILTER',
      filter: 'active'
    }
    store.dispatch(changeFilter(action.filter))
    expect(store.getState()).deep.equal({
      todos: [
          {id: 1, text: 'React', status: 'active',editing:false},
          {id: 2, text: 'Redux', status: 'active',editing:false}
        ],
        filter:'all'
    });
  });



  it('handles EDIT_ITEM by setting editing to true',()=> {
    let state = {...store.getState()};
   
    const action = {
      type: 'EDIT_ITEM',
      itemId: 1
    }
    store.dispatch(editItem(action.itemId))
    console.log(state)
    expect(store.getState()).to.equal({
      todos: [
          {id: 1, text: 'React', status: 'active',editing:true},
          {id: 2, text: 'Redux', status: 'active',editing:false},
          {id: 3, text: 'Immutable', status: 'completed',editing:false},
        ],
        filter:'all'
    })
  });

  
  it('handles DONE_EDITING by setting editing to true',()=> {
    let state = {...store.getState()};
   
    const action = {
      type: 'DONE_EDITING',
      itemId: 1,
      newText: 'Redux',

    }
    store.dispatch(doneEditing({id:action.itemId,text:action.newText}))
    expect(store.getState()).to.equal(fromJS({
      todos: [
          {id: 1, text: 'Redux', status: 'active',editing:false},
          {id: 2, text: 'Redux', status: 'active',editing:false},
          {id: 3, text: 'Immutable', status: 'completed',editing:false},
        ],
        filter:'all'
    }))
  })
});