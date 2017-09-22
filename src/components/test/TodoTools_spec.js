import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoTools from '../TodoTools';
import {expect} from 'chai';
import { shallow,mount } from "enzyme";


describe('TodoTools',() =>  {
		it("Render a TodoTools with filters",()=>{
			const filter ='all';
			let status = 'active'
			const changeFilter =sinon.spy();

			const component = shallow(
				<TodoTools 
					changeFilter = {changeFilter}
					filter={filter}
					len={3}
				/>
			);
			expect(component.find('.divitem').length).to.equal(5);



		
	

	})
})