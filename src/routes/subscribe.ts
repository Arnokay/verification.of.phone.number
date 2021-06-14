import express from "express";
import { subscribeController } from "../controllers/subscribeController";
import { phoneNumberMiddleware } from "../middlewares/phoneNumberMiddleware";

const subscribeRoutes = express.Router();

subscribeRoutes.post("/", [
  phoneNumberMiddleware,
  subscribeController.subscribe,
]);

export { subscribeRoutes };
