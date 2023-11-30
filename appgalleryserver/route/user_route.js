import express from "express";
import { Signup } from "../conrollers/userController.js";

const router = express.Router();

router.post('/signup',Signup);

export default router;