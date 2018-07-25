import _ from 'lodash';
import CollectionService from "./collection.service";

class OrdersService extends CollectionService {

    ytd() {
        const startDate = '2018-01-01';

        const orders = this.models.filter(m => m.orderDate >= startDate);
        return _.orderBy(orders, [ 'orderDate' ], [ 'desc' ]);
    }

    byEmployee(employeeId) {
        const orders = this.models.filter(m => m.employeeId === Number(employeeId));
        return orders;
    }

}

export default OrdersService;