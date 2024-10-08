import { Injectable } from '@nestjs/common';
import { CreateUserRequestDto, CreateUserResponseDto } from './dto';
import { MessageProducer } from '../producer/producer.service';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly producer: MessageProducer,
  ) {}

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  async register(
    userData: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
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
