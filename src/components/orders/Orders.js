import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import OrdersService from '../../services/orders.service';

class Orders extends Component {

    render() {
        // const params = this.props.match.params;
        const ordersService = new OrdersService(this.props.orders);
        const orders = ordersService.ytd();

        return (
            <div>
                <h3>Orders</h3>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Order Date</th>
                            <th>Customer</th>
                            <th>Ship To</th>
                            <th>Representative</th>
                            <th>Ship Via</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(o => (
                            <tr key={o.id}>
                                <td><Link to={`/orders/${o.id}`}> {o.id} </Link></td>
                                <td>{moment(o.orderDate).format('L')}</td>
                                <td>{o.customer}</td>
                                <td>{o.shipName}</td>
                                <td>{o.representative}</td>
                                <td>{o.shipper}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

}

const mapStateToProperties = state => {
    return {
        orders: state.orders,
    }
}

export default connect(mapStateToProperties)(Orders);