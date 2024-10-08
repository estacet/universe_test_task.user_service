import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { MessageProducer } from '../producer/producer.service';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

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

  async register(userData: CreateUserDto): Promise<User> {
    userData.password = await this.hashPassword(userData.password);
    const createdUser = await this.repository.createUser(userData);
    const headers = { 'X-Delay': '9000' };

    await this.producer.sendMessage(
      {
        type: 'user_created',
        data: {
          ...createdUser,
        },
      },
      headers,
    );

    return createdUser;
  }
}
