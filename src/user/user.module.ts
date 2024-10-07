import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ProducerModule } from '../producer/producer.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [ProducerModule],
})
export class UserModule {}
