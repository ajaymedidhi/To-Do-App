const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/todoController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/tasks', protect, createTask);
router.get('/tasks', protect, getTasks);
router.put('/tasks/:id', protect, updateTask);
router.delete('/tasks/:id', protect, deleteTask);

module.exports = router;
