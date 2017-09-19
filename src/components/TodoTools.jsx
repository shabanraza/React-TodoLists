import React from 'react';
import TextInput from './TextInput';
import classNames from 'classnames';

export default class TodoTools extends React.Component {
 
  render() {
		const { len,filter} = this.props;

    return <div style={{padding:'10px',height:'35px'}}>
      
				<div className='divitem'>{len}item</div>
				<div className='divitem' onClick={()=>this.props.changeFilter('all')}>All</div>
				<div className='divitem' onClick={()=>this.props.changeFilter('active')}>Active</div>
				<div className='divitem' onClick={()=>this.props.changeFilter('completed')}>Completed</div>
				<div className='divitem'>clear Completed</div>
	</div>
  }
};