import Router from "express";
import {
  deleteUser,
  getUserListing,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = Router();

router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListing);

export default router;
