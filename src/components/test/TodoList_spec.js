// import React from 'react';
// import TestUtils from 'react-addons-test-utils';
// import TodoList from '../../src/components/TodoList';
// import {List, Map, fromJS} from 'immutable';

// import {expect} from 'chai';
// const {renderIntoDocument,
//        scryRenderedDOMComponentsWithTag, Simulate} = TestUtils;

// describe('TodoList', () => {
//  it('renders a list with only completed items if the filter is completed', () => {
//     const todos =  [
//         {id: 1, text: 'React', status: 'active'},
//         {id: 2, text: 'Redux', status: 'active'},
//         {id: 3, text: 'Immutable', status: 'completed'}
//       ]
//     const filter = 'completed';
//     const component = renderIntoDocument(
//       <TodoList filter={filter} todos={todos} />
//     );
//     const items = scryRenderedDOMComponentsWithTag(component, 'li');

//     expect(items.length).to.equal(1);
//     expect(items[0].textContent).to.contain('Immutable');
//   });

//   it('renders a list with all the items', () => {
//     const todos =  [
//         {id: 1, text: 'React', status: 'active'},
//         {id: 2, text: 'Redux', status: 'active'},
//         {id: 3, text: 'Immutable', status: 'completed'}
//       ]
//     const filter = 'all';
//     const component = renderIntoDocument(
//       <TodoList filter={filter} todos={todos} />
//     );
//     const items = scryRenderedDOMComponentsWithTag(component, 'li');

//     expect(items.length).to.equal(3);
//     expect(items[0].textContent).to.contain('React');
//     expect(items[1].textContent).to.contain('Redux');
//     expect(items[2].textContent).to.contain('Immutable');
//   });
// });