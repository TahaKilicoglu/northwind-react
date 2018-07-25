import ApiBase from './apiBase';

class OrdersApi extends ApiBase {

    constructor() {
        super("/api/orders");
    }
}

export default OrdersApi;