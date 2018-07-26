import CustomersApi from '../../rest/customers.api';

/*
 * action types
 */
export const LIST_CUSTOMERS_REQUEST = 'customers/LIST_CUSTOMERS_REQUEST';
export const LIST_CUSTOMERS_SUCCESS = 'customers/LIST_CUSTOMERS_SUCCESS';
export const LIST_CUSTOMERS_FAIL = 'customers/LIST_CUSTOMERS_FAIL';

export const DELETE_CUSTOMER_REQUEST = 'customers/DELETE_CUSTOMER_REQUEST';
export const DELETE_CUSTOMER_SUCCESS = 'customers/DELETE_CUSTOMER_SUCCESS';
export const DELETE_CUSTOMER_FAIL = 'customers/DELETE_CUSTOMER_FAIL';

export const UPDATE_CUSTOMER_REQUEST = 'customers/UPDATE_CUSTOMER_REQUEST';
export const UPDATE_CUSTOMER_SUCCESS = 'customers/UPDATE_CUSTOMER_SUCCESS';
export const UPDATE_CUSTOMER_FAIL = 'customers/UPDATE_CUSTOMER_FAIL';

export const GET_CUSTOMER = 'customers/GET_CUSTOMER';

/*
 * other
 */

const customersApi = new CustomersApi();

/*
 * action creators
 */
export function loadCustomers() {
        console.log('Load Customers');
    return function apiListCustomers(dispatch) {
        return customersApi.list()
            .then(res => {
                const customers = res.data;
                console.log('Customers', customers.length);
                dispatch(loadCustomersSuccess(customers));
            })
            .catch(error => {
                dispatch(loadCustomersFail(error));
            });
    };

};

export function loadCustomersSuccess(customers) {
    return {
        type: LIST_CUSTOMERS_SUCCESS,
        customers
    };
};

export function loadCustomersFail(error) {
    return {
        type: LIST_CUSTOMERS_FAIL,
        error
    };
};

export function getCategory(error) {
    return {
        type: GET_CUSTOMER,
        error
    };
};