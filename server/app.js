import express from "express";
// import { createServer } from "http";
// import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { authRoutes } from "./routes/auth.js";
import { conversationRoutes } from "./routes/conversation.js";
import { messageRoutes } from "./routes/message.js";
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} : ${req.url}`);
  next();
});

app.use("/user", authRoutes);
app.use("/conversation", conversationRoutes);
app.use("/message", messageRoutes);

// const httpServer = createServer(app);
// const io = new Server(httpServer);

// io.on("connection", (socket) => {
//   console.log("connected");
// });
// httpServer.listen(PORT, () => {
//   console.log(`Server has started on ${PORT}...`);
// });

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tnscj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Server has started on ${PORT}...`);
    });
  })
  .catch((err) => console.log(err));
