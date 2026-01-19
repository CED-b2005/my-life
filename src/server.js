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

// test json-server.service
const { JsonServerService } = require("./modules/json-server/json-server.service");
const jsonServerService = new JsonServerService("task-manager");
app.get("/task-manager", async (req, res) => {
    const data = await jsonServerService.get();
    if (data) return res.status(200).json(data);
    else res.status(500).json({ message: "Internal Server Error" });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app;