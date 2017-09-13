import React from 'react';

export default class TodoApp extends React.Component {
  getItems() {
		console.log(this.props.todos)
    return this.props.todos || [];
  }
  render() {
    return <div>
      <section className="todoapp">
        <section className="main">
          <ul className="todo-list">
            {this.getItems().map(item =>
              <li className="active" key={item.text}>
                <div className="view">
                  <input type="checkbox"
                         className="toggle" />
                  <label htmlFor="todo">
                    {item.text}
                  </label>
                  <button className="destroy"></button>
                </div>
              </li>
            )}
          </ul>
        </section>
      </section>
    </div>
  }
};