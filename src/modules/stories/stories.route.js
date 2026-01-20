const Router = require('router');
const StoriesModule = require("./stories.module");

const storiesRouter = new Router();
const storiesModule = new StoriesModule();
const storiesController = storiesModule.storiesController;

storiesRouter.get("/", storiesController.getStories);
storiesRouter.get("/story/:id", storiesController.getStory);
storiesRouter.post("/", storiesController.createStory);
storiesRouter.post("/ai-evaluate", storiesController.aiEvaluateStory);
storiesRouter.patch("/story/:id", storiesController.updateStory);
storiesRouter.delete("/story/:id", storiesController.deleteStory);

module.exports = storiesRouter;