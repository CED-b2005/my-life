const Router = require('router');
const StoriesModule = require("./stories.module");
const { createStoryValidation, updateStoryValidation } = require('./validations');

const storiesRouter = new Router();
const storiesModule = new StoriesModule();
const storiesController = storiesModule.storiesController;

storiesRouter.get("/", storiesController.getStories);
storiesRouter.get("/story/:id", storiesController.getStory);
storiesRouter.post("/", createStoryValidation, storiesController.createStory);
storiesRouter.post("/ai-evaluate/:id", storiesController.aiEvaluateStory);
storiesRouter.patch("/story/:id", updateStoryValidation, storiesController.updateStory);
storiesRouter.delete("/story/:id", storiesController.deleteStory);

module.exports = storiesRouter;