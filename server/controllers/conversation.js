import { Conversation } from "../models/conversation.js";

const createConversation = async (req, res) => {
  try {
    const newConversation = await Conversation.create({
      members: [req.body.senderID, req.body.receiverID],
    });
    res.status(200).json(newConversation);
  } catch (err) {
    res.status(500).json({ message: "Internal server error try again later" });
  }
};

const retrieveConversation = async (req, res) => {
  try {
    const oldConversations = await Conversation.find({
      members: { $in: [req.authData.id] },
    });
    res.status(200).json(oldConversations);
  } catch (err) {
    res.status(500).json({ message: "Internal server error try again later" });
  }
};

export { createConversation, retrieveConversation };
