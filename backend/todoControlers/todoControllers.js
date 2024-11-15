const Todo = require('../models/Todo');

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addTodo = async (req, res) => {
  const { title } = req.body;

  const newTodo = new Todo({
    title,
  });

  try {
    await newTodo.save();
    res.json('Todo added!');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json('Todo deleted.');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getTodos, addTodo, deleteTodo };
