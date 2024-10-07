import { Injectable } from '@nestjs/common';
import { CreateUserRequestDto } from './dto';
import { MessageProducer } from '../producer/producer.service';

@Injectable()
export class UserService {
  constructor(private readonly producer: MessageProducer) {}

  async register(userData: CreateUserRequestDto) {
    await this.producer.sendMessage({
      type: 'user_created',
      data: {
        email: userData.email,
      },
    });
  }
}
