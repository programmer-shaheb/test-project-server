import express from "express";
import { getSectors } from "../controllers/sectors.js";
import {
  getAllUserInfo,
  getUserInfo,
  saveUserInfo,
  updateUserInfo,
} from "../controllers/users.js";

const router = express.Router();

router.get("/sectors", getSectors);
router.post("/create-user", saveUserInfo);
router.get("/all-user", getAllUserInfo);
router.put("/update-user", updateUserInfo);
router.get("/user/:userId", getUserInfo);

export default router;
