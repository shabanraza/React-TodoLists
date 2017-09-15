import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {setState}  from './actions/action'
import '../node_modules/todomvc-app-css/index.css';
import './style.css'

import {TodoAppContainer} from './components/TodoApp';
import reducer from './reducer/reducer';
import logger from 'redux-logger'

import {Provider} from 'react-redux';
import {compose, createStore,applyMiddleware} from 'redux';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = createStoreDevTools(reducer,applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
    		<TodoAppContainer />
  </Provider>,
  document.getElementById('app')
);