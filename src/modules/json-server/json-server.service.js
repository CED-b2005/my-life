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
        const { success, status, data, error } = await apiRequest(API_METHODS.GET, this.url);
        return response({ success, status, data, error });
    }

    /**
     * @param {string} id 
     */
    async getById(id) {
        const { success, status, data, error } = await apiRequest(API_METHODS.GET, `${this.url}/${id}`);
        return response({ success, status, data, error });
    }

    async getByQueries(queries) {
        const queryString = new URLSearchParams(queries).toString();
        const { success, status, data, error } = await apiRequest(API_METHODS.GET, `${this.url}?${queryString}`);
        return response({ success, status, data, error });

    }

    /**
    * @param {JSON} requestData 
    */
    async post(requestData) {
        const { success, status, data, error } = await apiRequest(API_METHODS.POST, this.url, requestData);
        return response({ success, status, data, error });
    }

    /**
     * @param {string} id
     * @param {JSON} requestData 
    */
    async put(id, requestData) {
        const { success, status, data, error } = await apiRequest(API_METHODS.PUT, `${this.url}/${id}`, requestData);
        return response({ success, status, data, error });
    }

    /**
     * @param {string} id
     * @param {JSON} requestData 
    */
    async patch(id, requestData) {
        const { success, status, data, error } = await apiRequest(API_METHODS.PATCH, `${this.url}/${id}`, requestData);
        return response({ success, status, data, error });
    }

    /**
     * @param {string} id
    */
    async delete(id) {
        const { success, status, data, error } = await apiRequest(API_METHODS.DELETE, `${this.url}/${id}`);
        return response({ success, status, data, error });
    }
}

module.exports = JsonServerService;