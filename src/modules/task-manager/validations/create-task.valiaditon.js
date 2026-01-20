const { ServerResponse } = require("../../../common");
const { isInvalidFieldsValidaton } = require("../../../helpers");

function createTaskValidation(req, res, next) {

    const fields = [
        { key: "title", type: "string" },
        { key: "contents", type: "string" },
        { key: "status", type: "string" },
        { key: "priority", type: "string" },
        { key: "level", type: "number" },
        { key: "start_date", type: "string" },
        { key: "start_time", type: "string" },
        { key: "end_date", type: "string" },
        { key: "end_time", type: "string" },
    ]

    const error = isInvalidFieldsValidaton(req.body, fields);
    if (error) return res.json(new ServerResponse({
        success: false,
        status: 400,
        error,
    }))

    next();
}

module.exports = createTaskValidation;