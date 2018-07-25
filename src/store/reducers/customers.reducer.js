import {
    LIST_CUSTOMERS_SUCCESS,
    GET_CUSTOMER,
    DELETE_CUSTOMER_SUCCESS
} from '../actions/customer.actions';

const customersReducer = function customersReducer(currentState = [], action) {
    let state = currentState;
    if (action.type.startsWith('customers/')) {
        switch (action.type) {
            case LIST_CUSTOMERS_SUCCESS:
                state = action.customers;
                break;
            case GET_CUSTOMER:
                break;
            case DELETE_CUSTOMER_SUCCESS:
                state = state.filter(model => model.id !== action.id);
                break;
            default:
                break;
        }
    }
    return state;
}

export default customersReducer;