import express from "express";
// import { addTodo, getTodo, getTodos, removeTodo, updateTodo } from "../data.js";
import { addTodo, getTodo, getTodos, removeTodo, updateTodo } from "../data.ts";

// enum TODO_TYPE {
//   BASIC,
//   URGENT,
// }

const router = express.Router();

// function handlePostTodos(req: Request, res: Response) {

// }

router.post("/todos", (req, res) => {
  const text = req.body.text; //body is of any type, there could be anything in the request

  const addedTodo = addTodo(text);

  res.json({ message: "Todo Added!", todo: addedTodo });
});

router.get("/todos", (req, res) => {
  const todos = getTodos();

  res.json({ todos });
});

router.get("/todos/:id", (req, res) => {
  const todo = getTodo(+req.params.id);
  res.json({ todo });
});

router.patch("/todos/:id", (req, res) => {
  const updatedTodo = updateTodo(+req.params.id, req.body.text);
  res.json({ message: "Todo updated", todo: updatedTodo });
});

router.delete("/todos/:id", (req, res) => {
  removeTodo(+req.params.id);
  res.json({ message: "Todo deleted!" });
});

export default router;
