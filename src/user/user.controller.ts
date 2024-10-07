import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequestDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Post('/')
  async register(@Body() userData: CreateUserRequestDto) {
    this.service.register(userData);
  }
}
