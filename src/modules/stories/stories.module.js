const StoriesService = require('./stories.service');
const StoriesController = require('./stories.controller');

class StoriesModule {
    constructor() {
        this.storiesService = new StoriesService();
        this.storiesController = new StoriesController(this.storiesService);
    }
}

module.exports = StoriesModule;