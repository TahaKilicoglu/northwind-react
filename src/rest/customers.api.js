import ApiBase from './apiBase';

class CustomersApi extends ApiBase {

    constructor() {
        super("/api/customers");
    }
}

export default CustomersApi;