const gemini = require("../../configs/google/gemini.config");
require("dotenv").config();

class AiService {
    async generate(contents) {
        try {
            const { data, error, status } = await gemini(
                process.env.GEMINI_API_KEY,
                process.env.GEMINI_MODEL,
                contents
            );

            if (data) return { data: data.candidates[0].content.parts[0].text }
            else return { error, status }

        } catch (error) {
            return { error: error.message, status: 500 };
        }
    }
}

module.exports = AiService;