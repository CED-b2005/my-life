const express = require("express");
const cors = require("cors");
const router = require("./routers");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// api
app.use(router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app;