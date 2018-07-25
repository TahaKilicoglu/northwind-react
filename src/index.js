import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './components/App';
import { loadCategories } from './store/actions/category.actions';
import { loadProducts } from './store/actions/product.actions';
import { loadOrders } from './store/actions/order.actions';
import { loadCustomers } from './store/actions/customer.actions';
import { loadEmployees } from './store/actions/employee.actions';

const store = configureStore();
store.subscribe(() => { console.log('State', store.getState())});

store.dispatch(loadEmployees());
store.dispatch(loadCategories());
store.dispatch(loadProducts());
store.dispatch(loadCustomers());
store.dispatch(loadOrders());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)