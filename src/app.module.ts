import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProducerModule } from './producer/producer.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ProducerModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [],
})
export class AppModule {}
