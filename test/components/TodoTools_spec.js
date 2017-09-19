import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoTools from '../../src/components/TodoTools';
import {expect} from 'chai';

const {renderIntoDocument,findRenderedDOMComponentWithTag,
       scryRenderedDOMComponentsWithClass,scryRenderedDOMComponentsWithTag, Simulate} = TestUtils;
describe('TodoTools',() =>  {
		it("Render a TodoTools with filters",()=>{
			const filter ='all';
			var status = 'active'
			const changeFilter =()=> status = 'completed';
			const component = renderIntoDocument(
				<TodoTools 
				changeFilter = {changeFilter}
				filter={filter}
				len={3}
				/>
			);
			var items = scryRenderedDOMComponentsWithClass(component, 'divitem');
			expect(items.length).to.equal(5);

		
	

	})
})