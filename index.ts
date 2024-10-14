import express, { Request, Response } from "express";
import router from "./routes";

const app = express();

app.use(express.json());
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Task Manager API");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
