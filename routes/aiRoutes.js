const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/categoryController');
const proposalController = require('../Controllers/proposalController');

router.post('/category', categoryController.createCategory);
router.post('/proposal', proposalController.createProposal); // You'll implement this controller next

module.exports = router;