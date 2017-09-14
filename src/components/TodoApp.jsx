import React from 'react';
import TodoList from './TodoList'
import * as actionCreators from '../action_creators';
import {connect} from 'react-redux';

export class TodoApp extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }
  render() {
    console.log("props------>"+JSON.stringify(this.props))
    return <div>
      <section className="todoapp">
        <TodoList {...this.props} />
      </section>
    </div>
  }
};
const mapStateToProps = state => {
  console.log(state)
  return {
    todos: state.todos,
    filter: state.filter,
    will:"shaban"
  };
}

export const TodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);
