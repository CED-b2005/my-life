const { API_METHODS } = require("../../common");
const { apiRequest } = require("../../helpers");
const { response } = require("./helpers");
require("dotenv").config();

class JsonServerService {
    constructor(resource) {
        const base_url = process.env.JSON_SERVER_BASE_URL;
        this.url = `${base_url}/${resource}`;
    }

    async get() {
        const { sussess, status, data, error } = await apiRequest(API_METHODS.GET, this.url);
        return response({ sussess, status, data, error });
    }

    async getById(id) {
        const { sussess, status, data, error } = await apiRequest(API_METHODS.GET, `${this.url}/${id}`);
        return response({ sussess, status, data, error });
    }

    async post(bodyData) {
        const { sussess, status, data, error } = await apiRequest(API_METHODS.POST, this.url, bodyData);
        return response({ sussess, status, data, error });
    }

    async put(id, bodyData) {
        const { sussess, status, data, error } = await apiRequest(API_METHODS.PUT, `${this.url}/${id}`, bodyData);
        return response({ sussess, status, data, error });
    }

    async patch(id, bodyData) {
        const { sussess, status, data, error } = await apiRequest(API_METHODS.PATCH, `${this.url}/${id}`, bodyData);
        return response({ sussess, status, data, error });  
    }

    async delete(id) {
        const { sussess, status, data, error } = await apiRequest(API_METHODS.DELETE, `${this.url}/${id}`);
        return response({ sussess, status, data, error });
    }
}

module.exports = {
    JsonServerService,
};