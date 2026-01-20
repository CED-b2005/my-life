const { ServerResponse } = require("../../../common");
const { isInvalidFieldsValidaton } = require("../../../helpers");

function createStoryValidation(req, res, next) {

    const fields = [
        { key: "title", type: "string" },
        { key: "contents", type: "string" },
        { key: "status", type: "string" }
    ];

    const error = isInvalidFieldsValidaton(req.body, fields);
    if (error) return res.json(new ServerResponse({
        success: false,
        status: 400,
        error,
    }));

    next();
}

module.exports = createStoryValidation;