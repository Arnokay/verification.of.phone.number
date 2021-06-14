import { databaseRepository } from "../repositories/databaseRepository";

class UserService {
  getVerified() {
    const users = databaseRepository.getVerifiedUsers();

    const mappedUsers = users.map((user) => {
      return user.phoneNumber;
    });

    return mappedUsers;
  }
}

export const userService = new UserService();
