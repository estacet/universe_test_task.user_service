import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly database: PrismaService) {}

  async createUser(body: CreateUserDto): Promise<User> {
    return this.database.user.create({
      data: body,
    });
  }
}
