import { Request, Response } from "express";
import { verificationCodeService } from "../services/verificationCodeService";

class VerifyController {
  verify(req: Request, res: Response) {
    const code = req.body.code;

    if (!code) {
      res.status(400).send("Code need to be provide");
      return;
    }

    if (verificationCodeService.verifyCode(code) === false) {
      res.status(400).send("Code need to be 4 digits.");
      return;
    }

    const result = verificationCodeService.verifyByCode(code);

    if (typeof result !== "boolean") {
      res.sendStatus(result.code);
      return;
    }

    res.sendStatus(200);
  }
}

export const verifyController = new VerifyController();
