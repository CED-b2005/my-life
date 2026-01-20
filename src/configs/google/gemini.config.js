const { GoogleGenAI } = require('@google/genai');

async function gemini(apiKey, model, contents) {
    try {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({ model, contents, });
        return { data: response };
    } catch (error) {
        return {
            status: error?.status ?? 500,
            error: error?.message ?? "Gemini error",
        };
    }
}

module.exports = gemini;