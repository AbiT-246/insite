import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import type { PublicUserDto } from './users.types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  getMe(): Promise<PublicUserDto> {
    return this.usersService.getMe();
  }
}
