const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem, getStats } = require('../controllers/itemController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.use(authenticateToken); // All routes require authentication

router.get('/', getItems);
router.get('/stats', getStats);
router.get('/:id', getItem);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;