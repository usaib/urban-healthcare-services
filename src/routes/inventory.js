import express from "express";

import * as InventoryController from "../controllers/Inventory/InventoryController";
import apiAuth from "../middleware/apiAuth";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post("/getInventory", apiAuth, InventoryController.getInventory);
// router.post("/createUser", apiAuth, UserController.create);
// router.post("/deleteUser", apiAuth, UserController.remove);
// router.post("/updateUser", apiAuth, UserController.update);
module.exports = router;
