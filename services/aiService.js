const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// --- MODULE 1: Category Generation ---
exports.generateCategoryData = async (name, description) => {
    try {
        const model = genAI.getGenerativeModel({ 
            model: "gemini-3-flash-preview",
            generationConfig: { responseMimeType: "application/json" } 
        });

        const prompt = `
            Analyze this product for Rayeva World:
            Name: ${name}
            Description: ${description}

            Return ONLY a JSON object with:
            {
              "primaryCategory": "Home | Personal Care | Food | Lifestyle",
              "subCategory": "string",
              "seoTags": ["string1", "string2", "string3", "string4", "string5"],
              "sustainabilityFilters": ["plastic-free", "vegan", "compostable", "recycled"]
            }
        `;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        return JSON.parse(responseText);
    } catch (error) {
        console.error("AI Category Service Error:", error);
        throw new Error("Failed to generate AI data: " + error.message);
    }
};

// --- MODULE 2: Proposal Generation ---
// Add this new function here!
exports.generateProposalData = async (productName, sustainabilityFilters) => {
    try {
        // We use text mode here (not JSON) because we want a written email
        const model = genAI.getGenerativeModel({ 
            model: "gemini-3-flash-preview" 
        });

        const prompt = `
            You are a B2B Sales Executive at Rayeva World.
            Write a professional, persuasive business proposal email for a potential wholesale client.
            
            Product: ${productName}
            Sustainability Highlights: ${sustainabilityFilters.join(", ")}

            The email must include:
            1. A catchy professional subject line.
            2. An intro about Rayeva World's mission for a greener planet.
            3. Detailed reasons why this specific product is a great choice.
            4. A call to action for a partnership meeting.

            Keep the tone professional, persuasive, and eco-conscious.
        `;

        const result = await model.generateContent(prompt);
        return result.response.text(); // Returns the email as a string
    } catch (error) {
        console.error("AI Proposal Service Error:", error);
        throw new Error("Failed to generate proposal: " + error.message);
    }
};