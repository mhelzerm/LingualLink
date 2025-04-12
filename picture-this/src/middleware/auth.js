// middleware/auth.js
import jwt from "jsonwebtoken";

export function authenticateToken(req, res, next) {
  console.log("Authorization Header:", req.headers["authorization"]);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Token missing" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
        console.log("Invalid token:", err);
        return res.status(403).json({ error: "Invalid token" });
    } 

    req.user = user;
    next();
  });
}