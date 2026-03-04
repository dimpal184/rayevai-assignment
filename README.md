Rayeva World AI Backend 🌿
A Node.js and Express-based backend built to automate product analysis and business communications for Rayeva World. This system integrates the Gemini 3 Flash AI model to provide intelligent categorization and professional proposal writing.

🚀 Key Features
AI-Powered Product Categorization: Analyzes product names and descriptions to generate SEO tags, primary/sub-categories, and sustainability filters in structured JSON format.

Automated B2B Proposal Generation: Creates professional wholesale email drafts based on specific product sustainability highlights.

Persistent Logging: Stores every AI generation in MongoDB (CategoryLogs and ProposalLogs) for auditing and history tracking.

🛠️ Tech Stack
Runtime: Node.js

Framework: Express.js

AI Model: Google Gemini 3 Flash

Database: MongoDB via Mongoose

📥 Setup and Installation
Clone the Repository:

Bash
git clone <your-repository-url>
cd server
Install Dependencies:

Bash
npm install
Configure Environment Variables:
Create a .env file in the root folder and add your credentials:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_google_api_key
Run the Server:

Bash
node server.js
🔌 API Endpoints
1. Category Analyzer
Route: POST /api/ai/category

Description: Analyzes product details and returns SEO and category data.

Sample Payload:

JSON
{
  "name": "Bamboo Straws",
  "description": "Eco-friendly reusable straws."
}
2. Proposal Generator
Route: POST /api/ai/proposal

Description: Generates a professional B2B email proposal.

Sample Payload:

JSON
{
  "productName": "Recycled Notebook",
  "sustainabilityFilters": ["plastic-free", "recycled"]
}
📂 Project Structure
Controllers/: Handles incoming requests and orchestrates the AI and Database logic.

models/: Defines the Mongoose schemas for Category and Proposal logs.

routes/: Manages the API endpoints and routing logic.

services/: Encapsulates the communication with the Gemini AI model.

