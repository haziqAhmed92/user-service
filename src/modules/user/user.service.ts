import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async getUserById(id: string): Promise<User> {
    Logger.log(`incoming id: ${id}`);
    const record = await this.userRepository.getUserById(id);
    const userRecord: User = {
      id: record.notebookUserId,
      name: record.name,
      email: record.email,
    };
    return userRecord;
  }
}

export interface User {
  id: string;
  name: string;
  email: string;
}
