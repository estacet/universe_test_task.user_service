import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserRequestDto, CreateUserResponseDto } from './dto';

@Injectable()
export class UserRepository {
  constructor(private readonly database: PrismaService) {}

  async createUser(body: CreateUserRequestDto): Promise<CreateUserResponseDto> {
    return this.database.user.create({
      data: body,
      select: {
        id: true,
        createdAt: true,
        deviceId: true,
        name: true,
        email: true,
      },
    });
  }
}
