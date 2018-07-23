import axios from 'axios';


class ApiBase {

    constructor(url) {
        this.url = url;
    }

    list(config = null) {
        return axios.get(this.url, config);
    }

    get(id, config = null) {
        return axios.get(`{this.url}/{id}`, config);
    }

    update(model, config = null) {
        return axios.put('{this.url}/{model.id}', model, config);
    }

    delete(id, config = null) {
        return axios.delete('{this.url}/{model.id}', config);
    }

}

export default ApiBase;