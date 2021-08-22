import express from "express";
import { addMessage, getMessage } from "../controllers/message.js";

const messageRoutes = express.Router();

messageRoutes.post("/add-message", addMessage);

messageRoutes.get("/get-message/:conversationID", getMessage);

export { messageRoutes };
