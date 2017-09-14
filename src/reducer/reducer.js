import { createReducer } from 'redux-act';
import { toggleComplete,setState } from './../action_creators';


const InitialState = {
	todos: [
      {id: 1, text: 'React', status: 'active', editing: false},
      {id: 2, text: 'Redux', status: 'active', editing: false},
      {id: 3, text: 'Immutable', status: 'active', editing: false},
    ],
    filter: 'all'
}


const reducer = createReducer({
    [setState]: (state,payload) => {    console.log("reducere state"+JSON.stringify(state))

      return {...state}
    },


		[toggleComplete]:(state,payload)=>{
			let todos = state.todos
			.findIndex((item) => item.id === payload)
			.filter((index)=> item[index].status === 'active' ? 'completed' : 'active') ;
			console.log(todos)
			return {...state,todos}
		}

},InitialState);



export default reducer;