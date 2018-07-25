import React from 'react';

const Order = params => {
    const model = params.model || {};
    console.log(params);
    return (

        <div>
            <h4>Order</h4>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Order {model.id}</h5>
                    <dl className="row">
                        <dt className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            Order Date
                            </dt>
                        <dd className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            {model.orderDate}
                        </dd>
                        <dt className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            Required
                            </dt>
                        <dd className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            {model.requiredDate}
                        </dd>
                        <dt className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            Shipped
                            </dt>
                        <dd className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            {model.shippedDate}
                        </dd>
                        <dt className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            Freight
                            </dt>
                        <dd className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            {model.freight}
                        </dd>
                        <dt className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            Ship Name
                            </dt>
                        <dd className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            {model.shipName}
                        </dd>
                        <dt className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            Ship Address
                            </dt>
                        <dd className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            {model.shipAddress}
                        </dd>
                        <dt className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            Ship City
                            </dt>
                        <dd className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            {model.shipCity}
                        </dd>
                        <dt className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            Ship Region
                            </dt>
                        <dd className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            {model.shipRegion}
                        </dd>
                        <dt className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            Ship Postal Code
                            </dt>
                        <dd className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            {model.shipPostalCode}
                        </dd>
                        <dt className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            Ship Country
                            </dt>
                        <dd className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            {model.shipCountry}
                        </dd>
                        <dt className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            Customer
                            </dt>
                        <dd className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            {model.customer}
                        </dd>
                        <dt className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            Representative
                            </dt>
                        <dd className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            {model.representative}
                        </dd>
                        <dt className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            Ship Via Navigation
                            </dt>
                        <dd className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
                            {model.shipper}
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default Order;