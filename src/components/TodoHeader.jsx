import React from 'react';

export default class TodoHeader extends React.Component {
 constructor(props){
    super(props)
    this.state = {
      text:this.props.text
    }
  }
  handleChanges (evt){
    this.setState({text:evt.target.value})
  }
  render() {
    const { text } = this.props;
    return <input className="edit"
                  autoFocus={true}
                  type="text"
                  ref="search"
                  value={this.state.text}
                  onChange={this.handleChanges.bind(this)}
                  onKeyPress={(e)=>{e.key=== 'Enter' ? this.props.addtodo(this.state.text):null}}
          />

                   
  }
};