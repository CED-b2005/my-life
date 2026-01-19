const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// test task-manager.service
const TaskManagerService = require("./modules/task-manager/task-manager.service");
const taskManagerService = new TaskManagerService();
app.get("/task-manager", async (req, res) => {
    const { status, data, error } = await taskManagerService.getTasks();
    if (data) return res.status(status).json(data);
    else res.status(status).json(error);
});

// get by id
app.get("/task-manager/:id", async (req, res) => {
    const { status, data, error } = await taskManagerService.getTask(req.params.id);
    if (data) return res.status(status).json(data);
    else res.status(status).json(error);
});

app.post("/task-manager", async (req, res) => {
    const { status, data, error } = await taskManagerService.createTask(req.body);
    if (data) return res.status(status).json(data);
    else res.status(status).json(error);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app;