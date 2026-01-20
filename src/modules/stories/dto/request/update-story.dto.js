class UpdateStoryDto {
    constructor(data = {}) {
        if (data.title !== undefined) this.title = data.title;
        if (data.contents !== undefined) this.contents = data.contents;
        if (data.status !== undefined) this.status = data.status;
        if (data.ai_comment !== undefined) this.ai_comment = data.ai_comment;
        if (data.ai_star !== undefined) this.ai_star = data.ai_star;
    }
}

module.exports = UpdateStoryDto;