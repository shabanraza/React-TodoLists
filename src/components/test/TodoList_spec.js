import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoList from '../TodoList';
import { shallow,mount } from "enzyme";

import {expect} from 'chai';


describe('TodoList', () => {

	const todos =  [
		{id: 1, text: 'React', status: 'active'},
		{id: 2, text: 'Redux', status: 'active'},
		{id: 3, text: 'Immutable', status: 'completed'}
	]
  
	const filter = 'completed';

	const component = mount(
      <TodoList filter={filter} todos={todos} />
	);
	const item = component.find('li');

 it('renders a list with only completed items if the filter is completed', () => {

   	expect(item.length).to.equal(1);
    expect(item.at(0)).to.have.text('Immutable');
  
});

it('renders a list with all the items', () => {
		const filter = 'all';
		const component = mount(
      <TodoList filter={filter} todos={todos} />
		);
		const item = component.find('li');


		expect(item.length).to.equal(3);
		expect(item.at(0)).to.have.text('React');
		expect(item.at(1)).to.have.text('Redux');
		expect(item.at(2)).to.have.text('Immutable');

		
  });
});