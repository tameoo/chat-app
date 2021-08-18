import express from "express";
// import { createServer } from "http";
// import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { router as authRoutes } from "./routes/auth.js";
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// const httpServer = createServer(app);
// const io = new Server(httpServer);

app.use((req, res, next) => {
  console.log(`${req.method} : ${req.url}`);
  next();
});

app.use("/user", authRoutes);

// io.on("connection", (socket) => {
//   console.log("connected");
// });

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tnscj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    // httpServer.listen(PORT, () => {
    //   console.log(`Server has started on ${PORT}...`);
    // });
    app.listen(PORT, () => {
      console.log(`Server has started on ${PORT}...`);
    });
  })
  .catch((err) => console.log(err));
