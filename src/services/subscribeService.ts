import { databaseRepository } from "../repositories/databaseRepository";
import { verificationCodeService } from "./verificationCodeService";

class SubscribeService {
  subscribe(phoneNumber: string) {
    const data = databaseRepository.getByPhoneNumber(phoneNumber);

    if (data) {
      if (data.isVerified === true) {
        return { code: 409, response: "Existed" };
      }
      if (data.isVerified === false) {
        return { code: 401, response: "Not verified" };
      }
    }

    const code = verificationCodeService.generateCode();
    databaseRepository.addPhoneNumberWithVerificationCode(phoneNumber, code);

    return code;
  }
}

export const subscribeService = new SubscribeService();
