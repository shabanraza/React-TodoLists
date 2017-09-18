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
    const { isCompleted,id,text } = this.props;
    return <li className={itemClass}>
      <div className="view">
          <input 
               type="checkbox"
               className="toggle" 
               
               defaultChecked={isCompleted} 
               onClick={() => this.props.toggleComplete(id)}
          />
        <label htmlFor="todo" ref="text" onDoubleClick={() => this.props.editItem(id)}>
          {text}
        </label>
        <button className="destroy" onClick={() => this.props.deleteItem(id)}></button>
      </div>
      <TextInput 
        {...this.props}
        doneEditing={(text) => {this.props.doneEditing(text)}}
      
      /> 
    </li>
  }
};