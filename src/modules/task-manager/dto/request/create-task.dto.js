const { uuid, timer } = require("../../../../utils");
const { TASK_STATUS, TASK_PRIORITY, TASK_LEVEL } = require("../../../../common");

class CreateTaskDto {
    constructor(data = {}) {
        this.id = uuid();
        this.title = data.title ?? "Template";
        this.content = data.content ?? "no content";
        this.status = data.status ?? TASK_STATUS.WAITING;
        this.priority = data.priority ?? TASK_PRIORITY.LOW;
        this.level = data.level ?? TASK_LEVEL[1];
        this.start_date = data.start_date ?? timer().date;
        this.start_time = data.start_time ?? "00:00:00";
        this.end_date = data.end_date ?? timer().date;
        this.end_time = data.end_time ?? "23:59:59";
        this.created_at = timer().date;
    }
}

module.exports = CreateTaskDto;