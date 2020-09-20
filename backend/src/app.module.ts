import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassesModule } from './classes/classes.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(''), UsersModule, ClassesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
