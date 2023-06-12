import { Signup, Login } from "../Controllers/UserController.js";
import express from "express";
import { userVerification } from "../Middlewares/UserMiddleware.js";

const router = express.Router()

router.post('/',userVerification)
//signup route
router.post("/signup", Signup);

//Login route
router.post("/login", Login);

export default router
