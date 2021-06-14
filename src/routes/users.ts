import express from "express";
import { userController } from "../controllers/userController";

const usersRoutes = express.Router();

usersRoutes.get("/verified", [userController.getVerified]);

export { usersRoutes };
