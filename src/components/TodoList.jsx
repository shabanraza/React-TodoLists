import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
 
	 getItems() {
     console.log(this.props)
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
						text={item.text} 
            isCompleted={(item) => item.status === 'completed'}
            isEditing={item.editing}
            toggleComplete={this.props.toggleComplete(item.id)}
            deleteItem={this.props.deleteItem}
            editItem={this.props.editItem}
					/>
        )}
      </ul>
    </section>
  }
};