import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from './Order';
import OrderDetails from './OrderDetails';
import OrdersService from '../../services/orders.service';

class OrderContainer extends Component {

    render() {
        const params = this.props.match.params;
        const ordersService = new OrdersService(this.props.orders);
        const model = ordersService.find(Number(params.id)) || {};

        return (
            <div>
                <Order model={model} />
                <OrderDetails model={model} />
            </div>
        );
    }

}

const mapStateToProperties = state => {
    return {
        orders: state.orders,
    }
}

export default connect(mapStateToProperties)(OrderContainer);