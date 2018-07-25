import moment from 'moment';
import OrdersApi from '../../rest/orders.api';

/*
 * action types
 */
export const LIST_ORDERS_REQUEST = 'orders/LIST_ORDERS_REQUEST';
export const LIST_ORDERS_SUCCESS = 'orders/LIST_ORDERS_SUCCESS';
export const LIST_ORDERS_FAIL = 'orders/LIST_ORDERS_FAIL';

export const DELETE_ORDER_REQUEST = 'orders/DELETE_ORDER_REQUEST';
export const DELETE_ORDER_SUCCESS = 'orders/DELETE_ORDER_SUCCESS';
export const DELETE_ORDER_FAIL = 'orders/DELETE_ORDER_FAIL';

export const UPDATE_ORDER_REQUEST = 'orders/UPDATE_ORDER_REQUEST';
export const UPDATE_ORDER_SUCCESS = 'orders/UPDATE_ORDER_SUCCESS';
export const UPDATE_ORDER_FAIL = 'orders/UPDATE_ORDER_FAIL';

export const GET_ORDER = 'orders/GET_ORDER';

/*
 * other
 */

const ordersApi = new OrdersApi();

/*
 * action creators
 */
export function loadOrders() {
    return function apiListOrders(dispatch) {
        return ordersApi.list()
            .then(res => {
                const orders = res.data.map(o => Object.assign({
                    orderDate: o.orderDate ? moment(o.orderDate).valueOf() : null,
                }, o));
                dispatch(loadOrdersSuccess(orders));
            })
            .catch(error => {
                dispatch(loadOrdersFail(error));
            });
    };

};

export function loadOrdersSuccess(orders) {
    return {
        type: LIST_ORDERS_SUCCESS,
        orders
    };
};

export function loadOrdersFail(error) {
    return {
        type: LIST_ORDERS_FAIL,
        error
    };
};

export function getCategory(error) {
    return {
        type: GET_ORDER,
        error
    };
};