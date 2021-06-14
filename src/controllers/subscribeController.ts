import { Request, Response } from "express";
import { subscribeService } from "../services/subscribeService";

class SubscribeController {
  subscribe(req: Request, res: Response) {
    const result = subscribeService.subscribe(req.body.phoneNumber);

    if (typeof result !== "number") {
      res.status(result.code).send(result.response);
      return;
    }

    res.json(result);
  }
}

export const subscribeController = new SubscribeController();
