const { uuid, timer } = require('../../../../utils');

class CreateStoryDto {
    constructor(data = {}) {
        this.id = uuid();
        this.title = data.title ?? "Template";
        this.contents = data.contents ?? "no contents";
        this.status = data.status ?? 'draft';
        this.ai_comment = "waiting ai comment"
        this.ai_star = 0;
        this.created_at = timer().date;
    }
}

module.exports = CreateStoryDto;