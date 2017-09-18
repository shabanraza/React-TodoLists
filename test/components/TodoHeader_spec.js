import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoHeader from '../../src/components/TodoHeader';
import {expect} from 'chai';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag, Simulate} = TestUtils;
describe('TodoHeader',()=>{
	it("render a todoheader",()=>{
		var text = "react";
		const addtodo = () => text = "Redux";
		const component = renderIntoDocument(<TodoHeader addtodo={addtodo}/>);
		const searchbox = scryRenderedDOMComponentsWithTag(component, 'input');
		searchbox.value = 'redux';
		Simulate.change(searchbox);
		Simulate.keyDown(searchbox, {key: "Enter", keyCode: 13, which: 13})
		expect(text).to.equal('Redux');

	})
})