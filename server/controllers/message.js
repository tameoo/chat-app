import { Message } from "../models/message.js";

const addMessage = async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(200).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: "Internal server error try later" });
  }
};

const getMessage = async (req, res) => {
  try {
    const allMessages = await Message.find({
      conversationID: req.params.conversationID,
    });
    res.status(200).json(allMessages);
  } catch (err) {
    res.status(500).json({ message: "Internal server error try later" });
  }
};

export { addMessage, getMessage };
