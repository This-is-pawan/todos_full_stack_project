
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

if (!JWT_SECRET) {
  console.log("JWT secret is missing");
}

export const GenerateToken = (payload: object) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const VerifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

