const { Router } = require('express');
const router = Router();
const taskController = require('../controllers/taskController');

router.post('/create',taskController.createTask);
router.get('/getAll',taskController.getAllTasks);
router.put('/update/:id',taskController.updateTask);
router.delete('/delete/:id',taskController.deleteTask);

module.exports = router;


