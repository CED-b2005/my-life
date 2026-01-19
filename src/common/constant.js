const API_METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
};

const TASK_STATUS = {
    WAITING: "waiting",
    IN_PROGRESS: "in_progress",
    COMPLETED: "completed",
    CANCELLED: "cancelled",
    MISSED: "missed",
    OVERDUE: "overdue",
    PROMISE: "promise",
};

const TASK_PRIORITY = {
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
    URGENT: "urgent",
    DEADLINE: "deadline",
};

const TASK_LEVEL = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
};

module.exports = {
    API_METHODS,
    TASK_STATUS,
    TASK_PRIORITY,
    TASK_LEVEL,
};