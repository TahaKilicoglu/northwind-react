import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import CategoriesContainer from '../components/categories/CategoriesContainer';
import Products from '../components/products/Products';
import OrderContainer from '../components/orders/OrderContainer';
import OrdersContainer from '../components/orders/OrdersContainer';

const Routes = () => (
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/categories/:categoryId/products' exact component={Products}/>
      <Route path='/categories' exact component={CategoriesContainer}/>
      <Route path='/products' exact component={Products}/>
      <Route path='/employees/:employeeId/orders/:filter' exact component={OrdersContainer}/>
      <Route path='/employees/:employeeId/orders' exact component={OrdersContainer}/>
      <Route path='/orders/:id' exact component={OrderContainer}/>
      <Route path='/orders' exact component={OrdersContainer}/>
    </Switch>
)

export default Routes
