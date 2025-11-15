import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
// Client initialization (no dangerouslyAllowBrowser: true needed)
const gemini_ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
    You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. The recipe can include up to 3 additional common ingredients they didn't mention, but try to use mostly the ingredients provided. Format your response in markdown to make it easy to render to a web page.
`;

// Define the API call function outside of the main App component
export async function getRecipeFromChefGemini(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    try {
        const response = await gemini_ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                { role: "user", parts: [{ text: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` }] }
            ],
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                maxOutputTokens: 1000,
            },
        });

        // The response structure is simpler
        return response.text;

    } catch (error) {
        console.log(error.message);
    }
}