function response({ sussess, status, data, error }) {
    if (sussess) return { status, data };
    else return { status, error };
}

module.exports = response;