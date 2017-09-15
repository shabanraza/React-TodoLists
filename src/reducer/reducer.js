import { createReducer } from 'redux-act';
import { toggleComplete,changeFilter,editItem, 
	cancelEditing,doneEditing,deleteItem,addtodo } from '../actions/action';


const InitialState = {
	todos: [
      {id: 1, text: 'React', status: 'active', editing: false},
      {id: 2, text: 'Redux', status: 'active', editing: false},
      {id: 3, text: 'Immutable', status: 'active', editing: false},
    ],
    filter: 'all'
}


const reducer = createReducer({
		[toggleComplete]:(state,payload)=> {
			let todos =  [...state.todos];
			let index = todos.findIndex((item)=>item.id === payload);
			if(todos[index].status === "active"){
				todos[index].status = 'completed'
			 }else{
				todos[index].status = 'active';
			} 
			return {...state,todos}
		},
		
		[changeFilter]: (state,payload) => {
			let todos = [...state.todos];
			todos = todos.filter((item)=> item.status === payload)
			return {...state,todos};
		},
		
		[editItem]: (state,payload) => {
			let todos =  [...state.todos];
			let index = todos.findIndex((item)=> item.id === payload);
			todos[index].editing = true;
			return {...state,todos};
		},

		[doneEditing]: (state,payload) => {	console.log(payload)
			let todos =  [...state.todos];
			let index = todos.findIndex((item)=> item.id === payload.id);
			todos[index].text = payload.text;
			todos[index].editing = false;
			return {...state,todos};
		},


		[deleteItem]: (state,payload) => {	console.log(payload)
			let todos =  [...state.todos];
			let index = todos.findIndex((item)=> item.id === payload);
			todos.splice(index,1);
			return {...state,todos};
		},

		[addtodo]:(state,payload) => {	
			let todos =  [...state.todos];
			todos.push({id:todos.length+1,text:payload,status: 'active', editing: false})
			return {...state,todos};
		},
		
		
		

},InitialState);



export default reducer;