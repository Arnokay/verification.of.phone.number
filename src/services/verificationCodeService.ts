import { databaseRepository } from "../repositories/databaseRepository";

class VerificationCodeService {
  private codes: number[] = [];

  verifyCode(code: number): boolean {
    return code <= 9999 && code >= 1000;
  }

  verifyByCode(code: number) {
    const data = databaseRepository.getByVerificationCode(code);

    if (!data) {
      return { code: 404 };
    }

    databaseRepository.setPhoneNumberVerified(data.phoneNumber);
    this.deleteCode(code);

    return true;
  }

  generateCode(): number {
    const code = Math.floor(1000 + Math.random() * 9000);

    if(this.codes.length === 9000) {
      return;
    }

    if (this.codes.includes(code)) {
      return this.generateCode();
    }

    this.codes.push(code);

    return code;
  }

  deleteCode(code: number) {
    const codeIndex = this.codes.findIndex((elem) => elem === code);
    this.codes.splice(codeIndex, 1);
  }
}

export const verificationCodeService = new VerificationCodeService();
