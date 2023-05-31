import express from "express";
const router = express.Router();

import {
  addItem,
  showItems,
  showItem,
  editItem,
  deleteItem,
} from "../controllers/itemsController.js";

router.route("/").post(addItem).get(showItems);
router.route("/:id").delete(deleteItem).patch(editItem).get(showItem);

export default router;
