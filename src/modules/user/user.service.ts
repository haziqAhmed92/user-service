import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from './user.repository';
import {
  UserResponseMapper,
  UserResponse,
} from './mapper/user-response.mapper';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async getUserById(id: string): Promise<UserResponse> {
    Logger.log(`incoming id: ${id}`);
    const record = await this.userRepository.getById(id);
    const mapped = new UserResponseMapper().mapSingleResponse(record);
    return mapped;
  }

  public async getUserByEmail(email: string): Promise<UserResponse> {
    Logger.log(`incoming id: ${email}`);
    const record = await this.userRepository.getByEmail(email);
    const mapped = new UserResponseMapper().mapSingleResponse(record);
    return mapped;
  }
}
