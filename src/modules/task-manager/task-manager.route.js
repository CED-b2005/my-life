const TaskManagerModule = require("./task-manager.module");
const Router = require("router");

const taskManagerModule = new TaskManagerModule();
const taskManagerController = taskManagerModule.taskManagerController;
const taskManagerService = taskManagerModule.taskManagerService;

const taskManagerRouter = new Router();

// get all
taskManagerRouter.get("/", async (req, res) => {
    const { status, data, error } = await taskManagerController.getTasks();
    if (data) return res.status(status).json(data);
    else res.status(status).json(error);
});

// get by id
taskManagerRouter.get("/:id", async (req, res) => {
    const { status, data, error } = await taskManagerService.getTask(req.params.id);
    if (data) return res.status(status).json(data);
    else res.status(status).json(error);
});

// create
taskManagerRouter.post("/", async (req, res) => {
    const { status, data, error } = await taskManagerService.createTask(req.body);
    if (data) return res.status(status).json(data);
    else res.status(status).json(error);
});

// patch
taskManagerRouter.patch("/:id", async (req, res) => {
    const { status, data, error } = await taskManagerService.updateTask(req.params.id, req.body);
    if (data) return res.status(status).json(data);
    else res.status(status).json(error);
});

// delete
taskManagerRouter.delete("/:id", async (req, res) => {
    const { status, data, error } = await taskManagerService.deleteTask(req.params.id, req.body);
    if (data) return res.status(status).json(data);
    else res.status(status).json(error);
});

module.exports = taskManagerRouter;