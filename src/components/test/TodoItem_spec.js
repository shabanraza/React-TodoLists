
import React from "react";
import TodoItem from "../TodoItem";
import { shallow } from "enzyme";

describe("TodoItem", () => {
  const text = 'React';
  const component = shallow(
    <TodoItem text={text} isCompleted={true}/>
    );

  it("should render TodoItem component",()=>{
        expect(component).to.be.present();
  })

  it("check if the item is completed",()=>{
    expect(component.find('li')).to.have.className('completed')
  })

  it("invoke callback when delete buttton is clicked",()=> {
    
    const deleteItem = sinon.spy();
    const component = shallow(
        <TodoItem text={text} deleteItem={deleteItem} />
    )

    expect(deleteItem).to.have.not.been.called;

    component.find('button').simulate('click');
    deleteItem('1')

    expect(deleteItem).to.have.been.calledWith(sinon.match.string);
    
  })

  it("invoke callback when checkbox is clicked",()=>{
     //const toggleComplete = sinon.spy();
    const actions = {
      toggleComplete: sinon.spy()
    };
     const text = "React";
     const component = shallow(
        <TodoItem text={text} toggleComplete={actions.toggleComplete}/>
     );

    expect(component.find('input')).to.not.be.checked()

    component.find('input').simulate('click');
    component.setProps({ isCompleted: true })

    expect(component.find('input')).to.be.checked()

  })

  it("invoke callback when text is double is clicked",()=> {
    const text = "React";
    const editItem = sinon.spy();
    const component = shallow(
        <TodoItem text={text} editItem={editItem}/>
     );

    expect(component.find('label')).to.have.text('React');
    
    component.find('label').simulate('doubleClick');

    expect(editItem.calledOnce).to.equal(true);

})






})