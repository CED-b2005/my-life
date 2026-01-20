const StoriesService = require("./stories.service");
const { CreateStoryDto, UpdateStoryDto } = require("./dto");
const { ServerResponse } = require("../../common")

class StoriesController {
    constructor(storiesService = new StoriesService()) {
        this.storiesService = storiesService;
    }

    getStories = async (req, res) => {
        const response = await this.storiesService.getStories();
        return res.json(new ServerResponse(response));
    }

    getStory = async (req, res) => {
        const { id } = req.params;
        const response = await this.storiesService.getStory(id);
        return res.json(new ServerResponse(response));
    }

    createStory = async (req, res) => {
        const story = new CreateStoryDto(req.body);
        const response = await this.storiesService.createStory(story);
        return res.json(new ServerResponse(response));
    }

    updateStory = async (req, res) => {
        const { id } = req.params;
        const story = new UpdateStoryDto(req.body);
        const response = await this.storiesService.updateStory(id, story);
        return res.json(new ServerResponse(response));
    }

    deleteStory = async (req, res) => {
        const { id } = req.params;
        const response = await this.storiesService.deleteStory(id);
        return res.json(new ServerResponse(response));
    }

    aiEvaluateStory = async (req, res) => {
        const { id } = req.params;
        const response = await this.storiesService.aiEvaluateStory(id);
        return res.json(new ServerResponse(response));
    }
}

module.exports = StoriesController;