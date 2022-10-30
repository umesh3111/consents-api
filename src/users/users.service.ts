import { UserDto } from './dto/users.dto';
import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  /**
   * Get the user by userId
   * @param id
   */
  public async getUser(id: string): Promise<UserEntity> {
    return this.repository.getUser(id);
  }

  /**
   * Create a new user
   * @param user
   * @returns
   */
  public async createUser(user: UserDto): Promise<UserEntity> {
    const newUser = UserDto.from(user);
    return this.repository.createUser(newUser);
  }
}
