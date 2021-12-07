import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseSchema } from './base.schema';

export type UserDocument = User & Document;

@Schema({ collection: '_User' })
export class User extends BaseSchema {
  @Prop({ type: 'string' })
  username: string;

  @Prop({ type: 'string' })
  password: string;

  @Prop({ type: 'string' })
  emailAddress: string;

  @Prop({ type: 'boolean' })
  isMeetingsUser: boolean;

  @Prop({ type: 'string' })
  notebookUserId: string;

  @Prop({ type: 'number' })
  freeMeetingsLeft: number;

  @Prop({ type: 'string' })
  email: string;

  @Prop({ type: 'string' })
  name: string;

  @Prop({ type: 'boolean' })
  gauthExists: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
