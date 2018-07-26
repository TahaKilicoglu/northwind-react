import { compareDates } from '../helpers/date.helpers';

export const soldBy = function soldBy(employeeId) {
    return (order) => order.employeeId === Number(employeeId);
}

export const countByRepresentative = function countByRepresentative(employeeId) {
    return (order) => order.employeeId === employeeId ? 1 : 0;
}

export const ytd = function ytd() {
    const thisYear = new Date().getFullYear();
    return (order) => order.orderDate.getFullYear() === thisYear;
}

export const orderByAge = function orderByAge() {
    return compareDates('orderDate', 'desc');
}

export const getValueOfOrderDetail = function getValueOfOrderDetail(orderDetail) {
    return orderDetail.unitPrice * orderDetail.quantity * (1.0 - orderDetail.discount);
}

export const orderDetailPriceReducer = (accumulator, orderDetail) => {
    return accumulator + getValueOfOrderDetail(orderDetail) || 0;
}

export const orderPriceReducer = (accumulator, order) => {
    return accumulator + (order.orderDetails ? (order.orderDetails.reduce(orderDetailPriceReducer, 0)) : 0);
}
