class ServerResponse    {
    /**
     * @param {{ 
     * success: boolean,
     * status: number,
     * data: any,
     * message: string | null,
     * error: string | null
     * }} params 
     */
    
    constructor(params = {}) {
        this.success = params.success?? false;
        this.message = params.message ?? null
        this.status = params.status;
        this.data = params.data ?? null;
        this.error = params.error ?? null;
    }
}

module.exports = ServerResponse;