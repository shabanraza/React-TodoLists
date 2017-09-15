import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
 
	 getItems() {
    if (this.props.todos) {
      return this.props.todos.filter(
				(item) => this.props.filter === 'all' || item.status === this.props.filter
      );
    }
    return [];
  }

  

  
  render() {
    return <section className="main">
      <ul className="todo-list">
        {
					this.getItems().map(item =>
          <TodoItem 
						key={item.text}
            id = {item.id}
						text={item.text} 
            isCompleted={(item) => item.status === 'completed'}
            isEditing={item.editing}
            toggleComplete={()=>this.props.toggleComplete(item.id)}
            deleteItem={()=>this.props.deleteItem(item.id)}
            editItem={()=>this.props.editItem(item.id)}
            doneEditing={(text)=>this.props.doneEditing({id:item.id,text:text})}
					/>
        )}
      </ul>
    </section>
  }
};