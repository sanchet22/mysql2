import { Router, Request, Response } from "express";
import db from "./db";

const router = Router();

// Get all tasks
router.get("/tasks", (req: Request, res: Response) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

// Add a new task
router.post("/tasks", (req: Request, res: Response) => {
  const { task } = req.body;
  db.query(
    "INSERT INTO tasks (task, completed) VALUES (?, ?)",
    [task, false],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ id: result.insertId, task, completed: false });
      }
    }
  );
});

// Delete a task
router.delete("/tasks/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  db.query("DELETE FROM tasks WHERE id = ?", [id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.sendStatus(204);
    }
  });
});

// Mark a task as complete
router.patch("/tasks/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed } = req.body;
  db.query(
    "UPDATE tasks SET completed = ? WHERE id = ?",
    [completed, id],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.sendStatus(200);
      }
    }
  );
});

export default router;
