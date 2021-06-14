import express from "express";
import { verifyController } from "../controllers/verifyController";

const verifyRoutes = express.Router();

verifyRoutes.post("/", [verifyController.verify]);

export { verifyRoutes };
