import User from "../Models/UserModel.js"
import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser"
export const userVerification = (req, res,next) => {
    const token = req.cookies.token

    if (!token) {
        return res.json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.json({ status: false })
        } else {
            next()
        }
    })
}