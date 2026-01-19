const TaskManagerService = require("./task-manager.service");
const { ServerResponse } = require("../../common");
class TaskManagerController {
    constructor(taskManagerService = new TaskManagerService()) {
        this.taskManagerService = taskManagerService;
    }

    async getTasks() {
        return await this.taskManagerService.getTasks();
    }


}

module.exports = TaskManagerController;