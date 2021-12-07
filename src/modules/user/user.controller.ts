/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

import { UserById } from './interface/user-by-id.interface';
import { UserService, User } from './user.service';

@Controller('user')
export class UserController {
  public constructor(private readonly service: UserService) {}

  @GrpcMethod('UserService', 'findOne')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async userById(data: UserById, metadata: Metadata): Promise<User> {
    return await this.service.getUserById(data.id);
  }
}
