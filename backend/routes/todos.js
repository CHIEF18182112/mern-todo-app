const router = require('express').Router();
const { getTodos, addTodo, deleteTodo } = require('../todoControlers/todoControllers');

router.get('/', getTodos);
router.post('/add', addTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
