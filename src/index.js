import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';
import { loadCategories } from './store/actions/northwindActions';

const store = configureStore();
store.subscribe(() => { console.log('State', store.getState())});


store.dispatch(loadCategories());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)