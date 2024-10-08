import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Post('/')
  async register(@Body() userData: CreateUserDto) {
    this.service.register(userData);
  }
}
