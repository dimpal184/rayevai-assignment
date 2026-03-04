# Rayeva World AI Backend 🌿

A Node.js & Express backend designed for Rayeva World to automate product categorization and B2B proposal generation using the **Gemini 3 Flash** AI model.

## 🚀 Features
* **AI Category Analyzer**: Automatically generates primary/sub-categories, SEO tags, and sustainability filters based on product descriptions.
* **B2B Proposal Generator**: Drafts professional, eco-conscious wholesale email proposals for clients.
* **MongoDB Integration**: All AI-generated responses are logged and stored for future reference.

## 🛠️ Tech Stack
* **Backend**: Node.js, Express.js
* **AI**: Google Gemini 3 Flash (via `@google/generative-ai`)
* **Database**: MongoDB (Mongoose)
* **Testing**: Thunder Client / Postman

## 📥 Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-link>
   cd rayevai-assignment/server

2. **Install dependencies:**:
Bash
npm install
3. **Environment Variables:**:
Create a .env file in the root directory and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_google_gemini_api_key
4. **Start the server**:

Bash
node server.js

 **🔌 API Endpoints**
1. Create Category Data
Endpoint: POST /api/ai/category

Body (JSON):

JSON
{
  "name": "Bamboo Straws",
  "description": "Reusable and biodegradable straws."
}
2. Create B2B Proposal
Endpoint: POST /api/ai/proposal

Body (JSON):

JSON
{
  "productName": "Recycled Notebooks",
  "sustainabilityFilters": ["recycled", "plastic-free"]
}


📂 Folder Structure
models/: Mongoose schemas for data persistence.

routes/: API endpoint definitions.

Controllers/: Logic for handling requests and responses.

services/: AI service wrapper for Gemini API integration.


---



