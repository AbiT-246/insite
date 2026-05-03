import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';

const mongoUri =
  process.env.MONGODB_URI ?? '';

@Module({
  imports: [MongooseModule.forRoot(mongoUri), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
