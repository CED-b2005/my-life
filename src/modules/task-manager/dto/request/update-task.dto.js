class UpdateTaskDto {
    constructor(data = {}) {
        if (data.title !== undefined) this.title = data.title;
        if (data.content !== undefined) this.content = data.content;
        if (data.status !== undefined) this.status = data.status;
        if (data.priority !== undefined) this.priority = data.priority;
        if (data.level !== undefined) this.level = data.level;
        if (data.start_date !== undefined) this.start_date = data.start_date;
        if (data.end_date !== undefined) this.end_date = data.end_date;
        if (data.start_time !== undefined) this.start_time = data.start_time;
        if (data.end_time !== undefined) this.end_time = data.end_time;
    }
}

module.exports = UpdateTaskDto;