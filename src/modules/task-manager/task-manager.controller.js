const TaskManagerService = require("./task-manager.service");
const {CreateTaskDto, UpdateTaskDto} = require("./dto");
const { ServerResponse } = require("../../common");
class TaskManagerController {
    constructor(taskManagerService = new TaskManagerService()) {
        this.taskManagerService = taskManagerService;
    }

    getAllTasks = async (req, res) => {
        const response = await this.taskManagerService.getTasks();
        return res.json(new ServerResponse(response));
    }

    getTasksByDate = async (req, res) => {
        const response = await this.taskManagerService.queries(req.query);
        return res.json(new ServerResponse(response));
    }

    getTask = async (req, res) => {
        const { id } = req.params;
        const response = await this.taskManagerService.getTask(id);
        return res.json(new ServerResponse(response));
    }

    createTask = async (req, res) => {
        const requestData = new CreateTaskDto(req.body);
        const response = await this.taskManagerService.createTask(requestData);
        return res.json(new ServerResponse(response));
    }

    updateTask = async (req, res) => {
        const { id } = req.params;
        const requestData = new UpdateTaskDto(req.body);
        const response = await this.taskManagerService.updateTask(id, requestData);
        return res.json(new ServerResponse(response));
    }

    deleteTask = async (req, res) => {
        const { id } = req.params;
        const response = await this.taskManagerService.deleteTask(id);
        return res.json(new ServerResponse(response));
    }
}

module.exports = TaskManagerController;