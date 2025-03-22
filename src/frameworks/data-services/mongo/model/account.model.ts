import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AccountDocument = Account & Document;

@Schema({ collection: 'accounts', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Account {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  google_id: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  full_name: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
