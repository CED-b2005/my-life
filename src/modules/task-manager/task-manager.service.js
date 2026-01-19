const JsonServerService = require("../json-server/json-server.service");

const { CreateTaskDto } = require("./dto");

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

    /**
     * @param {CreateTaskDto} requestData 
     */
    async createTask(requestData) {
        const bodyData = new CreateTaskDto(requestData);
        return await this.jsonServerService.post(bodyData);
    }

    /**
     * @param {string} id
     * @param {JSON} bodyData 
     */
    async patchTask(id, bodyData) {
        return await this.jsonServerService.patch(id, bodyData);
    }

    /**
     * @param {string} id
     */
    async deleteTask(id) {
        return await this.jsonServerService.delete(id);
    }
}

module.exports = TaskManagerService;