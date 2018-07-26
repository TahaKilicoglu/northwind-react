import axios from 'axios';

export const BaseUrl = "https://northwind-server.azurewebsites.net";

class ApiBase {

    constructor(url) {
        if (url.startsWith('/')) {
            this.url = BaseUrl + url;
        } else {
            this.url = `${BaseUrl}/${url}`;
        }

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