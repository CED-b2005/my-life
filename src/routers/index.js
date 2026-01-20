const taskManagerRouter = require("../modules/task-manager/task-manager.route");
const storiesRouter = require("../modules/stories/stories.route");
const Router = require("router");

const router = new Router();

router.use("/api/task-manager", taskManagerRouter);
router.use("/api/stories", storiesRouter);


module.exports = router;