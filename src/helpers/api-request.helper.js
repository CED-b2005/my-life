async function apiRequest(method, url, bodyData) {
    const options = {
        method,
        headers: { "Content-Type": "application/json" }
    };

    if (method !== "GET" && bodyData) options.body = JSON.stringify(bodyData);

    try {
        const response = await fetch(url, options);

        if (!response.ok) return apiResponse({
            status: response.status,
            error: await response.text(),
        })

        return apiResponse({
            status: response.status,
            data: await response.json()
        });

    } catch (error) {
        if (error.name === 'TypeError') return apiResponse({
            status: 500,
            error: "Network error: Unable to connect to the server.",
        });

        else return apiResponse({
            status: 500,
            error: error.message,
        });
    }
}

function  apiResponse({ status, data, error }) {
    return {
        sussess: data !== undefined && data !== null ? true : false,
        status,
        data,
        error,
    }
}

module.exports = apiRequest;
