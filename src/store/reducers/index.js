import { combineReducers } from 'redux';
import categoriesReducer from './categories.reducer';
import productsReducer from './products.reducer';
import customersReducer from './customers.reducer';
import ordersReducer from './orders.reducer';

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    customers: customersReducer,
    orders: ordersReducer
});

export const initialState = {
    categories: [],
    products: [],
    customers: [],
    orders: []
};
