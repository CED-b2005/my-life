const { ServerResponse } = require("../../../common");
const { isInvalidOptionFieldsValidaton } = require("../../../helpers");

function updateStoryValidation(req, res, next) {

    const fields = [
        { key: "title", type: "string" },
        { key: "contents", type: "string" },
        { key: "status", type: "string" },
        { key: "ai_comment", type: "string" },
        { key: "ai_start", type: "string" }
    ];

    const error = isInvalidOptionFieldsValidaton(req.body, fields);

    if (error) return res.json(new ServerResponse({
        success: false,
        status: 400,
        error,
    }))

    next();
}

module.exports = updateStoryValidation