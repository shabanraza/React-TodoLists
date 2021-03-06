import React from 'react';

export default class TextInput extends React.Component {
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
                  value={this.state.text}
                  onChange={this.handleChanges.bind(this)}
                  onBlur={()=>this.props.doneEditing(this.state.text)}
          />

                   
  }
};