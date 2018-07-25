import _ from 'lodash';
import CollectionService from "./collection.service";

class OrdersService extends CollectionService {

    ytd() {
        const startDate = '2018-01-01';

        const orders = this.models.filter(m => m.orderDate >= startDate);
        return _.orderBy(orders, [ 'orderDate' ], [ 'desc' ]);
    }

}

export default OrdersService;