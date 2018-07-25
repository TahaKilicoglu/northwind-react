import { combineReducers } from 'redux';
import employeesReducer from './employees.reducer';
import categoriesReducer from './categories.reducer';
import productsReducer from './products.reducer';
import customersReducer from './customers.reducer';
import ordersReducer from './orders.reducer';

export const rootReducer = combineReducers({
    employees: employeesReducer,
    categories: categoriesReducer,
    products: productsReducer,
    customers: customersReducer,
    orders: ordersReducer
});

export const initialState = {
    employees: [],
    categories: [],
    products: [],
    customers: [],
    orders: []
};
