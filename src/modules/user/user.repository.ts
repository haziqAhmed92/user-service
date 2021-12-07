import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RpcException } from '@nestjs/microservices';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../schema/user.schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  public async getById(id: string): Promise<User> {
    const record = await this.userModel.findById(id);
    if (record == null) {
      throw new RpcException('invalid id supplied');
    }
    return record;
  }

  public async getByEmail(email: string): Promise<User> {
    const record = await this.userModel.findOne({ emailAddress: email });
    if (record == null) {
      throw new RpcException('invalid email supplied');
    }
    return record;
  }
}
