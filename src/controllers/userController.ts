import { Request, Response } from "express";
import { userService } from "../services/userService";

class UserController {
  getVerified(req: Request, res: Response) {
    const verifiedUsers = userService.getVerified();

    res.json(verifiedUsers);
  }
}

export const userController = new UserController();
