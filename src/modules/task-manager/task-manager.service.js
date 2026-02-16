const JsonServerService = require("../json-server/json-server.service");
const { CreateTaskDto, UpdateTaskDto } = require("./dto");

class TaskManagerService {
    constructor() {
        this.jsonServerService = new JsonServerService("task-manager");
    }

    async getTasks() {
        return await this.jsonServerService.get();
    }

    /**
     * @param {string} id 
     */
    async getTask(id) {
        return await this.jsonServerService.getById(id);
    }

    async queries(queries) {
        return await this.jsonServerService.getByQueries(queries);
    }

    /**
     * @param {CreateTaskDto} requestData 
     */
    async createTask(requestData) {
        return await this.jsonServerService.post(requestData);
    }

    /**
     * @param {string} id
     * @param {UpdateTaskDto} requestData 
     */
    async updateTask(id, requestData) {
        return await this.jsonServerService.patch(id, requestData);
    }

    /**
     * @param {string} id
     */
    async deleteTask(id) {
        return await this.jsonServerService.delete(id);
    }
}

module.exports = TaskManagerService;