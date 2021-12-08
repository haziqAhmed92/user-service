/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Logger, UseInterceptors } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

import { UserDto } from './dto/user-by-id.dto';
import { UserService, User } from './user.service';

import { BadRequestInterceptor } from '../../interceptors/bad-request.interceptor';

@UseInterceptors(BadRequestInterceptor)
@Controller('user')
export class UserController {

  public constructor(private readonly service: UserService) {}

  @GrpcMethod('UserService', 'findOne')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findOne(data: UserDto, metadata: Metadata) {
    return await this.service.getUserById(data.id);
  }

  @GrpcMethod('UserService', 'findOneByEmail')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findOneByEmail(data: UserDto, metadata: Metadata) {
    return await this.service.getUserByEmail(data.email);
  }

  @Get(":id")
  async getById(@Param('id') id: string): Promise<any> {
    Logger.log(`incoming Id: ${id}`);
    return await this.service.getUserById(id);
  }
}
