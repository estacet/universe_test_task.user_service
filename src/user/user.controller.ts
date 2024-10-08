import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequestDto, CreateUserResponseDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Post('/')
  async register(@Body() userData: CreateUserRequestDto): Promise<CreateUserResponseDto> {
    return this.service.register(userData);
  }
}
