import React from 'react';
import { getValueOfOrderDetail, orderDetailPriceReducer } from '../../collections/orders.collection';
import './OrderDetails.css';

const OrderDetails = params => {
    const orderDetails = params.model ? (params.model.orderDetails || []) : [];
    const totalPrice = orderDetails.reduce(orderDetailPriceReducer, 0);

    return (
        <div className="card">
            <div className="card-body">
                <table className="table table-striped table-bordered products-table">
                    <thead>
                        <tr>
                            <th className="product text-center" style={{ width: '50%' }}>Product</th>
                            <th className="category text-center">Category</th>
                            <th className="unitPrice text-center">Unit Price</th>
                            <th className="quantity text-center">Quantity</th>
                            <th className="discount text-center">Discount</th>
                            <th className="value text-center">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderDetails.map(item => (
                            <tr key={item.productId}>
                                <td className="product">
                                    {item.product}
                                </td>
                                <td className="category">
                                    {item.category}
                                </td>
                                <td className="unitPrice text-right">
                                    ${item.unitPrice.toFixed(2)}
                                </td>
                                <td className="quantity text-right">
                                    {item.quantity}
                                </td>
                                <td className="discount text-right">
                                    {(item.discount*100).toFixed(0)}%
                                </td>
                                <td className="value text-right">
                                    ${getValueOfOrderDetail(item).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                        <th colSpan="5">&nbsp;</th>
                        <th className="text-right">${ totalPrice.toFixed(2) }</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );

};

export default OrderDetails;