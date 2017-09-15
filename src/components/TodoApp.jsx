import React from 'react';
import TodoList from './TodoList'
import * as actionCreators from '../actions/action';
import TodoTools from './TodoTools';
import TodoHeader from './TodoHeader'
import {connect} from 'react-redux';

export class TodoApp extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return <div>
      <section className="todoapp">
      <TodoHeader 
        addtodo={(newtodo)=>this.props.addtodo(newtodo)}
      />
        <TodoList {...this.props} />
        <TodoTools 
          changeFilter={(status)=>this.props.changeFilter(status)}
          filter={this.props.filter}
          len={this.props.todos.length}
        />
      </section>
    </div>
  }
};
const mapStateToProps = state => {
  console.log(state)
  return {
    todos: state.todos,
    filter: state.filter
  };
}

export const TodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);
