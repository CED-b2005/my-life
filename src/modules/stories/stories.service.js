const JsonServerService = require('../json-server/json-server.service');
const AiService = require('../ai/ai.service');

class StoriesService {
    constructor() {
        this.jsonServerService = new JsonServerService("stories");
        this.aiService = new AiService();
    }

    async getStories() {
        return await this.jsonServerService.get();
    }

    async getStory(id) {
        return await this.jsonServerService.getById(id);
    }

    async createStory(story) {
        return await this.jsonServerService.post(story);
    }

    async updateStory(id, story) {
        return await this.jsonServerService.patch(id, story);
    }

    async deleteStory(id) {
        return await this.jsonServerService.delete(id);
    }

    async aiEvaluateStory(id) {
        const { data } = await this.jsonServerService.getById(id);
        return await this.aiService.generate(data.contents);
    }
}

module.exports = StoriesService;