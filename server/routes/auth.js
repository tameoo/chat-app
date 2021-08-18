import express from "express";
import { signInController, signUpController } from "../controllers/auth.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/sign-in", signInController);
router.post("/sign-up", signUpController);

router.get("/dummy", verifyToken, (req, res) => {
  res.json({ message: "verified", res: req.result });
});

async function verifyToken(req, res, next) {
  const bearerHeader = req.header["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split("");
    const bearerToken = bearer[1];
    const result = await jwt.verify(bearerToken, process.env.SECRET_KEY);

    if (!result) {
      res.status(403).json({ message: "Forbidden" });
    }

    req.result = result;
    next();
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
}

export { router };
