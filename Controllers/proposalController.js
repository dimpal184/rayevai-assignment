const ProposalLog = require('../models/ProposalLog');
const aiService = require('../services/aiService');

exports.createProposal = async (req, res) => {
    try {
        // 1. Get data from the request body
        const { productName, sustainabilityFilters } = req.body;

        // 2. Call the AI service to generate the email text
        const proposalText = await aiService.generateProposalData(productName, sustainabilityFilters);

        // 3. Save the record to MongoDB
        const newProposal = await ProposalLog.create({
            productName: productName,
            sustainabilityFilters: sustainabilityFilters,
            proposalText: proposalText
        });

        // 4. Send the successful response back to Thunder Client
        res.status(201).json(newProposal);
        
    } catch (err) {
        console.error("Controller Error:", err);
        res.status(500).json({ error: err.message });
    }
};