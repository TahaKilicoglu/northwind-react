import React from 'react';
import OrdersService from '../../services/orders.service';

export default params => {

    const orders = params.orders;       // orders for this employee only
    const ordersService = new OrdersService(orders);
    const ytd = ordersService.ytd();

    return (
        <ul>
            <li>Orders: {orders.length}</li>
            <li>Orders YTD: { ytd.length }</li>
        </ul>
    );
}