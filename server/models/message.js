import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  conversationID: {
    type: String,
  },
  senderID: {
    type: String,
  },
  text: {
    type: String,
  },
});

const Message = mongoose.model("Message", messageSchema);

export { Message };
