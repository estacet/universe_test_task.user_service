import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProducerModule } from './producer/producer.module';

@Module({
  imports: [ProducerModule, UserModule],
  providers: [],
})
export class AppModule {}
