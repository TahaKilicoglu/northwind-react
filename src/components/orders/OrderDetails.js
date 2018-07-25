import React from 'react';

const OrderDetails = params => {
    console.log('OrderDetails', params);
    const orderDetails = params.model ? (params.model.orderDetails || []) : [];

    return (
        <div className="card">
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderDetails.map(item => (
                            <tr key={item.productId}>
                                <td>
                                    {item.product}
                                </td>
                                <td>
                                    {item.unitPrice}
                                </td>
                                <td>
                                    {item.quantity}
                                </td>
                                <td>
                                    {item.discount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default OrderDetails;