import { database } from "../db/database";

class DatabaseRepository {
  addPhoneNumberWithVerificationCode(phoneNumber: string, code: number) {
    database.push({ phoneNumber, code, isVerified: false });
  }

  getByVerificationCode(code: number) {
    return database.find((elem) => elem.code === code);
  }

  getByPhoneNumber(phoneNumber: string) {
    return database.find((elem) => elem.phoneNumber === phoneNumber);
  }

  setPhoneNumberVerified(phoneNumber: string) {
    const indexOfPhoneNumber = database.findIndex(
      (elem) => elem.phoneNumber === phoneNumber
    );
    database[indexOfPhoneNumber].isVerified = true;
    delete database[indexOfPhoneNumber].code;
  }

  getVerifiedUsers() {
    return database.filter((user) => user.isVerified === true);
  }
}

export const databaseRepository = new DatabaseRepository();
