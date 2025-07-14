import express from "express";
import todoRoutes from "./routes/todo.js";
const app = express();
// app.get("/", (req, res) => {
//   console.log(req.method);
//   res.json({ message: "Hello World!" });
// });
app.use(express.json());
app.use(todoRoutes);
app.use((err, req, res, next) => {
    res.status(500).json({ message: "An error occured!" });
    //   next();
});
app.listen(3000);
// import { createServer } from "node:http";
// const server = createServer((req, res) => {
//   console.log(req.method);
//   res.end("Hello World!");
// });
// server.listen(3000);
