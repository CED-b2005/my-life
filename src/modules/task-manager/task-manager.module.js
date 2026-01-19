const TaskManagerService = require("./task-manager.service");
const TaskManagerController = require("./task-manager.controller");

class TaskManagerModule {
    constructor() {
        this.taskManagerService = new TaskManagerService();
        this.taskManagerController = new TaskManagerController(this.taskManagerService);
    }
}

module.exports = TaskManagerModule;