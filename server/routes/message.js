import express from "express";
import { verifyToken } from "../utils/index.js";
import { addMessage, getMessage } from "../controllers/message.js";

const messageRoutes = express.Router();

messageRoutes.post("/add-message", verifyToken, addMessage);

messageRoutes.get("/get-message/:conversationID", verifyToken, getMessage);

export { messageRoutes };
