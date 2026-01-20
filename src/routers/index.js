const taskManagerRouter = require("../modules/task-manager/task-manager.route");
const Router = require("router");

const router = new Router();

router.use("/api/task-manager", taskManagerRouter)

module.exports = router;