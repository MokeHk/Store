import express from "express";
const router = express.Router();

import { addItem, editItem, sellBuy } from "../controllers/authController.js";

router.route("/add-item").post(addItem);
router.route("/edit-item").post(editItem);
router.route("/sell-buy").post(sellBuy);

export default router;
