class ServerResponse {
    constructor({ data, status, message, error }) {
        this.data = data;
        this.status = status ? status : 200;
        this.message = message ?? messageRespone(this.status);
        this.error = error?.message ?? error;
    }
}

function messageRespone(status) {
    switch (status) {
        case 200:
            return "Success";
        case 400:
            return "Bad Request";
        case 401:
            return "Unauthorized";
        case 403:
            return "Forbidden";
        case 404:
            return "Not Found";
        case 422:
            return "Unprocessable Entity";
        case 500:
            return "Internal Server Error";
        case 502:
            return "Bad Gateway";
    }
}

module.exports = ServerResponse;