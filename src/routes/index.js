import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import Categories from '../components/categories/Categories';
import Products from '../components/products/Products';
import OrderContainer from '../components/orders/OrderContainer';
import Orders from '../components/orders/Orders';

const Routes = () => (
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/categories/:categoryId/products' exact component={Products}/>
      <Route path='/categories' exact component={Categories}/>
      <Route path='/products' exact component={Products}/>
      <Route path='/orders/:id' exact component={OrderContainer}/>
      <Route path='/orders' exact component={Orders}/>
    </Switch>
)

export default Routes
