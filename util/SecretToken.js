import dotenv from 'dotenv'
dotenv.config();
import jwt from "jsonwebtoken"
const Token = process.env.TOKEN_KEY

export const createSecretToken = (id) => {
  return jwt.sign({ id }, Token, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
