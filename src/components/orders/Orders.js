import React from 'react';
import { Link } from 'react-router-dom';
import { displayDate } from '../../helpers/date.helpers';
import { orderDetailPriceReducer } from '../../collections/orders.collection';

export const Orders = function Orders({ orders, representative }) {
    return (
        <div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Order Date</th>
                        <th>Customer</th>
                        <th>Ship To</th>
                        {representative ? null : <th>Representative</th>}
                        <th>Ship Via</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(o => (
                        <tr key={o.id}>
                            <td><Link to={`/orders/${o.id}`}> {o.id} </Link></td>
                            <td>{displayDate(o.orderDate)}</td>
                            <td>{o.customer}</td>
                            <td>{o.shipName}</td>
                            {representative ? null : <td>{o.representative}</td>}
                            <td>{o.shipper}</td>
                            <td className="text-right">${ o.orderDetails.reduce(orderDetailPriceReducer, 0).toFixed(2) }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};