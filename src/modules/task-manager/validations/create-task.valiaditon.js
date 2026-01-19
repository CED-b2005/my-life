const { ServerResponse } = require("../../../common");
const { isInvalidFieldsValidaton } = require("../../../helpers");

function createTaskValidation(req, res, next) {
    const fields = []
    const error = isInvalidFieldsValidaton(req.body, fields);
    if (error) return res.json(new ServerResponse({
        success: false,
        status: 400,
        error,
    }))

}

module.exports = createTaskValidation;