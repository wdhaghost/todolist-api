import { Signup } from "../Controllers/UserController.js";
import express from "express";

const router = express.Router()

router.post("/signup", Signup);

export default router
