function isInvalidFieldsValidaton(body, fields = []) {
    if (!body || typeof body !== 'object') return "Validation error - missing or invalid body";

    for (const field of fields) {
        if (!field.key) return "Validation error - field object is missing 'key'";

        if (body[field.key] == null) return `Validation error - missing field ${field.key}`;

        const fieldValue = body[field.key];
        const fieldType = field.type;

        if (typeof fieldValue !== fieldType) return `Validation error - invalid type for field ${field.key}: expected ${field.type}, got ${typeof fieldValue}`;

        if (fieldType === 'array' && !Array.isArray(fieldValue)) return `Validation error - field ${field.key} should be an array, got ${typeof fieldValue}`;

        if (fieldType === 'date' && !(fieldValue instanceof Date)) return `Validation error - field ${field.key} should be a Date, got ${typeof fieldValue}`;
    }

    return false;
}

function isInvalidOptionFieldsValidaton(body, fields = []) {
    if (!body || typeof body !== 'object') return "Validation error - missing or invalid body";

    for (const field of fields) {
        if (!field.key) return "Validation error - field object is missing 'key'";

        if (body[field.key] !== undefined && body[field.key] !== null) {
            const fieldValue = body[field.key];
            const fieldType = field.type;

            if (typeof fieldValue !== fieldType) return `Validation error - invalid type for field ${field.key}: expected ${field.type}, got ${typeof fieldValue}`;

            if (fieldType === 'array' && !Array.isArray(fieldValue)) return `Validation error - field ${field.key} should be an array, got ${typeof fieldValue}`;

            if (fieldType === 'date' && !(fieldValue instanceof Date)) return `Validation error - field ${field.key} should be a Date, got ${typeof fieldValue}`;
        }
    }

    return false;
}


module.exports = {
    isInvalidFieldsValidaton,
    isInvalidOptionFieldsValidaton,
};