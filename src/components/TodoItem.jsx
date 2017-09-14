import React from 'react';
import TextInput from './TextInput';
import classNames from 'classnames';

export default class TodoItem extends React.Component {
 
  render() {
     let itemClass = classNames({
      'todo': true,
      'completed': this.props.isCompleted,
      'editing': this.props.isEditing
    });
    return <li className={itemClass}>
      <div className="view">
        <input type="checkbox"
               className="toggle" 
               defaultChecked={this.props.isCompleted} 
               onClick={() => this.props.toggleComplete(this.props.id)}
        />
        <label htmlFor="todo" onDoubleClick={() => this.props.editItem(this.props.id)}>
          {this.props.text}
        </label>
        <button className="destroy" onClick={() => this.props.deleteItem(this.props.id)}></button>
      </div>
      <TextInput /> 
    </li>
  }
};