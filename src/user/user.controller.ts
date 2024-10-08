import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Post('/')
  async register(@Body() userData: CreateUserDto): Promise<User> {
    return this.service.register(userData);
  }
}
