import { UserDto } from './dto/users.dto';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get(':id')
  public async getUser(@Param('id') id: string): Promise<UserEntity> {
    return this.service.getUser(id);
  }

  @Post('add')
  public async createUser(@Body() user: UserDto): Promise<UserEntity> {
    return this.service.createUser(user);
  }
}
