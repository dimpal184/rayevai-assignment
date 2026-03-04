
const CategoryLog = require('../models/CategoryLog');
const aiService = require('../services/aiService');

exports.createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const aiResponse = await aiService.generateCategoryData(name, description);
        
        const newEntry = await CategoryLog.create({
            productName: name,
            description: description,
            categoryData: aiResponse
        });

        res.status(201).json(newEntry);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};