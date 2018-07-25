class CollectionService {

    constructor(models) {
        this.models = models;
    }

    find(id) {
        return this.models.find(m => m.id === id);
    }
}

export default CollectionService;