import {
    LIST_ORDERS_SUCCESS,
    GET_ORDER,
    DELETE_ORDER_SUCCESS
} from '../actions/order.actions';

const ordersReducer = function ordersReducer(currentState = [], action) {
    let state = currentState;
    if (action.type.startsWith('orders/')) {
        switch (action.type) {
            case LIST_ORDERS_SUCCESS:
                state = action.orders;
                break;
            case GET_ORDER:
                break;
            case DELETE_ORDER_SUCCESS:
                state = state.filter(model => model.id !== action.id);
                break;
            default:
                break;
        }
    }
    return state;
}

export default ordersReducer;