import React from 'react';
import { displayDate } from '../../helpers/date.helpers';
import { orderDetailPriceReducer } from '../../collections/orders.collection';

const Order = params => {
    const model = params.model || { orderDetails: [] };
    const value = model.orderDetails.reduce(orderDetailPriceReducer, 0);

    const labelClass = "col-xs-12 col-sm-6 col-md-3 col-xl-2";
    const dataClass = "col-xs-12 col-sm-6 col-md-3 col-xl-2";

    return (

        <div>
            <h4>Order</h4>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Order {model.id}</h5>
                    <dl className="row">
                        <dt className={labelClass}>Customer</dt>
                        <dd className={dataClass}>{model.customer}</dd>
                        <dt className={labelClass}>Representative</dt>
                        <dd className={dataClass}>{model.representative}</dd>
                        <dt className={labelClass}>Value</dt>
                        <dd className={dataClass}>${value.toFixed(2)}</dd>
                        <dt className={labelClass}>Order Date</dt>
                        <dd className={dataClass}>{displayDate(model.orderDate)}</dd>
                        <dt className={labelClass}>Required</dt>
                        <dd className={dataClass}>{displayDate(model.requiredDate)}</dd>
                        <dt className={labelClass}>Shipped</dt>
                        <dd className={dataClass}>{displayDate(model.shippedDate)}</dd>
                        <dt className={labelClass}>Freight</dt>
                        <dd className={dataClass}>{model.freight}</dd>
                        <dt className={labelClass}>Ship Name</dt>
                        <dd className={dataClass}>{model.shipName}</dd>
                        <dt className={labelClass}>Ship Address</dt>
                        <dd className={dataClass}>{model.shipAddress}</dd>
                        <dt className={labelClass}>Ship City</dt>
                        <dd className={dataClass}>{model.shipCity}</dd>
                        <dt className={labelClass}>Ship Region</dt>
                        <dd className={dataClass}>{model.shipRegion}</dd>
                        <dt className={labelClass}>Ship Postal Code</dt>
                        <dd className={dataClass}>{model.shipPostalCode}</dd>
                        <dt className={labelClass}>Ship Country</dt>
                        <dd className={dataClass}>{model.shipCountry}</dd>
                        <dt className={labelClass}>Ship Via Navigation</dt>
                        <dd className={dataClass}>{model.shipper}</dd>
                    </dl>
                </div>
            </div>
        </div >
    );
}

export default Order;