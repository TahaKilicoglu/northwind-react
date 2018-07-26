import React from 'react';
import { getValueOfOrderDetail, valueOfOrderDetail, orderDetailPriceReducer } from '../../collections/orders.collection';

const OrderDetails = params => {
    console.log('OrderDetails', params);
    const orderDetails = params.model ? (params.model.orderDetails || []) : [];
    const totalPrice = orderDetails.reduce(orderDetailPriceReducer, 0);

    return (
        <div className="card">
            <div className="card-body">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center" style={{ width: '100%' }}>Product</th>
                            <th className="text-center">Category</th>
                            <th className="text-center">Unit Price</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Discount</th>
                            <th className="text-center">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderDetails.map(item => (
                            <tr key={item.productId}>
                                <td>
                                    {item.product}
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td className="text-right">
                                    ${item.unitPrice.toFixed(2)}
                                </td>
                                <td className="text-right">
                                    {item.quantity}
                                </td>
                                <td className="text-right">
                                    {(item.discount*100).toFixed(0)}%
                                </td>
                                <td className="text-right">
                                    ${getValueOfOrderDetail(item).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                        <th colSpan="5"></th>
                        <th className="text-right">${ totalPrice.toFixed(2) }</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );

}

export default OrderDetails;