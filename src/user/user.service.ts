import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { MessageProducer } from '../producer/producer.service';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private readonly saltRounds: number;
  constructor(
    private readonly repository: UserRepository,
    private readonly producer: MessageProducer,
  ) {
    this.saltRounds = 10;
  }

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltRounds);
  }

  async register(userData: CreateUserDto) {
    userData.password = await this.hashPassword(userData.password);
    const createdUser = await this.repository.createUser(userData);
    await this.producer.sendMessage({
      type: 'user_created',
      data: {
        ...createdUser,
      },
    });
  }
}
