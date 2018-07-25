class ProductsService {

    constructor(models) {
        this.models = models;
    }

    byCategoryId(categoryId) {
        return this.models.filter(m => m.categoryId === categoryId);
    }

}

export default ProductsService;