import ApiBase from './apiBase';

class ProductsApi extends ApiBase {

    constructor() {
        super("/api/products");
    }
}

export default ProductsApi;