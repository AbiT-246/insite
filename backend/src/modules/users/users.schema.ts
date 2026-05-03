import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  occupation: string;

  @Prop({ required: true })
  income: number;

  @Prop()
  score: number;

  @Prop()
  savingTypeId?: string;

  // @Prop(type: Schema.Types.ObjectId, ref: 'SavingType')
  // savingType: SavingType;

  // @Prop(type: Schema.Types.ObjectId, ref: 'BankStatement')
  // bankStatements: BankStatement[];
}

export const UserSchema = SchemaFactory.createForClass(User);
