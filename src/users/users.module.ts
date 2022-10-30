import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';

@Module({
  imports: [InMemoryDBModule.forFeature('users', {})],
  providers: [UsersService, UsersRepository],
  controllers: [UsersController],
})
export class UsersModule {}
