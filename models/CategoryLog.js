const mongoose = require('mongoose');

const CategoryLogSchema = new mongoose.Schema({
    productName: String,
    description: String,
    categoryData: {
        primaryCategory: String,
        subCategory: String,
        seoTags: [String],
        sustainabilityFilters: [String]
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CategoryLog', CategoryLogSchema);