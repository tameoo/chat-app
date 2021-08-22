import express from "express";
import { verifyToken } from "../utils/index.js";
import {
  createConversation,
  retrieveConversation,
} from "../controllers/conversation.js";

const conversationRoutes = express.Router();

conversationRoutes.post(
  "/create-conversation",
  verifyToken,
  createConversation
);

conversationRoutes.get(
  "/retrieve-conversation/:userID",
  verifyToken,
  retrieveConversation
);

export { conversationRoutes };
