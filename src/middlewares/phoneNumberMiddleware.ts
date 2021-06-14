import { Request, Response, NextFunction } from "express";

export function phoneNumberMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const re = /^[+]380[0-9]{9}$/;

  if (req.body?.phoneNumber && re.test(req.body.phoneNumber)) {
    next();
  } else {
    res.status(400).send("Phone number need to be valid");
  }
}
