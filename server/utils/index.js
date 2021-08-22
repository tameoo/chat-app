import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization;

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    try {
      const result = jwt.verify(bearerToken, process.env.SECRET_KEY);
      req.authData = result;
      next();
    } catch (err) {
      res.status(401).json({ message: "invalid token" });
    }
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
};

export { verifyToken };
