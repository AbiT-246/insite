import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import type { PublicUserDto } from './users.types';
import { User, type UserDocument } from './users.schema';

const SEED_EMAIL = 'alex@example.com';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async getMe(): Promise<PublicUserDto> {
    let doc = await this.userModel.findOne({ email: SEED_EMAIL }).exec();
    if (!doc) {
      doc = await this.userModel.create({
        name: 'Alex Sample',
        email: SEED_EMAIL,
        password: 'change-me',
        age: 32,
        city: 'Austin',
        occupation: 'Software engineer',
        income: 95000,
        score: 720,
        savingTypeId: 'placeholder-saving-type-1',
      });
    }
    return this.toPublic(doc);
  }

  private toPublic(doc: UserDocument): PublicUserDto {
    return {
      id: String(doc._id),
      name: doc.name,
      email: doc.email,
      age: doc.age,
      city: doc.city,
      occupation: doc.occupation,
      income: doc.income,
      score: doc.score,
      ...(doc.savingTypeId != null && doc.savingTypeId !== ''
        ? { savingTypeId: doc.savingTypeId }
        : {}),
    };
  }
}
