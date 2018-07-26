import React, { Component } from 'react';
import { connect } from 'react-redux';

import { soldBy, ytd, orderByAge } from '../../collections/orders.collection';
import { Orders } from './Orders';

class OrdersContainer extends Component {

    render() {
        const params = this.props.match.params;
        
        let orders = this.props.orders;
        let subheading = null;
        let representative;
        if (params.employeeId) {
            const employeeId = Number(params.employeeId);
            orders = orders.filter(soldBy(employeeId));
            representative = this.props.employees.find(emp => emp.id === employeeId);
            if (representative) {
                subheading = <h4>{ representative.firstName } { representative.lastName }</h4>
            }
        }
        if (params.filter === 'ytd') {
            orders = orders.filter(ytd());
        }

        orders = orders.sort(orderByAge());

        return (
            <div>
                <h3>Orders</h3>
                {subheading}
                <Orders orders={orders} representative={representative} />
            </div>
        );
    }

}

const mapStateToProperties = state => {
    return {
        orders: state.orders,
        employees: state.employees
    }
}

export default connect(mapStateToProperties)(OrdersContainer);