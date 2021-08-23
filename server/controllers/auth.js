import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

const signInController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existsUser = await User.findOne({ email });

    if (!existsUser) {
      return res.status(404).json({ message: "User doesnt exist" });
    }

    const passwordCorrect = await bcrypt.compare(password, existsUser.password);

    if (!passwordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { email: existsUser.email, id: existsUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ result: existsUser, token });
  } catch (err) {
    res.status(500).json({ message: "Internal server error try again later" });
  }
};

const signUpController = async (req, res) => {
  const { name, email, password, avatar } = req.body;

  try {
    const existsUser = await User.findOne({ email });

    if (existsUser) {
      return res.status(404).json({ message: "User already exist" });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const createdUser = await User.create({
      name,
      email,
      password: hashPassword,
      avatar,
    });

    const token = jwt.sign(
      { email: createdUser.email, id: createdUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ result: createdUser, token });
  } catch (err) {
    res.status(500).json({ message: "Internal server error try again later" });
  }
};

export { signInController, signUpController };
