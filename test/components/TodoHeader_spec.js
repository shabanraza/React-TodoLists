import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoHeader from '../../src/components/TodoHeader';
import {expect} from 'chai';

const {renderIntoDocument,findRenderedDOMComponentWithTag,
        Simulate} = TestUtils;
describe('TodoHeader',() =>  {
	it("Render a todoheader with searchbox",()=>{
		var text = "react";
		const addtodo = () => text = "Redux";
		const component = renderIntoDocument(<TodoHeader addtodo={addtodo}/>);
		var input = findRenderedDOMComponentWithTag(component, 'input');
		Simulate.change(input);
		Simulate.keyDown(input, {key: "Entrer", keyCode: 13, which: 13});
	

	})
})