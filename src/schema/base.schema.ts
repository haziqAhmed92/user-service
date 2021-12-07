import { Prop } from '@nestjs/mongoose';

export class BaseSchema {
  @Prop({ type: 'string' })
  _id: string;

  @Prop({ type: 'string' })
  _created_at: string;

  @Prop({ type: 'string' })
  _updated_at: string;
}
