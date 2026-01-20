/**
 * @param {{
 *  success: boolean,
 *  status: number,
 *  data: any,
 *  error: string | null
 * }} param0 
 */

function response({ success, status, data, error }) {
    if (success) return { success, status, data };
    else return { success, status, error };
}

module.exports = response;