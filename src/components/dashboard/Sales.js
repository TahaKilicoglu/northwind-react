import React from 'react';
import {Link} from 'react-router-dom';

import { ytd, orderPriceReducer } from '../../collections/orders.collection';

export default ({employee, orders}) => {

    const ordersYtd = orders.filter(ytd());
    const salesYtd = ordersYtd.reduce(orderPriceReducer, 0);

    let badgeClass = "badge ";
    if (salesYtd >= 50000) {
        badgeClass += "badge-primary";
    } else {
        badgeClass += "badge-danger";
    }

    return (
        <ul className="list-group">
            <li className="list-group-item"><Link to={`employees/${employee.id}/orders`}>Orders</Link>: {orders.length}</li>
            <li className="list-group-item"><Link to={`employees/${employee.id}/orders/ytd`}>Orders YTD</Link>: { ordersYtd.length }</li>
            <li className="list-group-item"><span className={ badgeClass }>${salesYtd.toFixed(2)}</span></li>
        </ul>
    );
}