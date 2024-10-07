import { Injectable } from '@nestjs/common';
import { CreateUserRequestDto } from './dto';

@Injectable()
export class UserService {
  constructor() {}

  register(userData: CreateUserRequestDto) {
    console.log(userData);
  }
}
