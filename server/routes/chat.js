import express from "express";
import { sendMessage, getMessages } from "../controllers/chat.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/messages/:userId/:contactId", getMessages);

export default router;
