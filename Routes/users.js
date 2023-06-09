import { Signup, Login } from "../Controllers/UserController.js";
import express from "express";

const router = express.Router()

//signup route
router.post("/signup", Signup);

//Login route
router.post("/login", Login);

export default router
