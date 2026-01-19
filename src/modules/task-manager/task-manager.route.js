const TaskManagerModule = require("./task-manager.module");
const Router = require("router");

const taskManagerModule = new TaskManagerModule();
const taskManagerController = taskManagerModule.taskManagerController;

const taskManagerRouter = new Router();

// get all
taskManagerRouter.get("/tasks", taskManagerController.getAllTasks);

// get by id
taskManagerRouter.get("/tasks/:id", taskManagerController.getTask);

// get by date
taskManagerRouter.get("/date", taskManagerController.getTasksByDate);

// create
taskManagerRouter.post("/tasks", taskManagerController.createTask);

// update - patch
taskManagerRouter.patch("/tasks/:id", taskManagerController.updateTask);

// delete
taskManagerRouter.delete("/tasks/:id", taskManagerController.deleteTask);

module.exports = taskManagerRouter;