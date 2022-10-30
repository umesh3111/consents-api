import {
  InjectInMemoryDBService,
  InMemoryDBService,
} from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { parse as uuidParse } from 'uuid';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectInMemoryDBService('users')
    private model: InMemoryDBService<UserEntity>,
  ) {}

  /**
   * Get the user by userId
   * @param id
   */
  public async getUser(id: string): Promise<UserEntity> {
    return this.model.get(id);
  }

  /**
   * Create a new user
   * @param user
   * @returns
   */
  public async createUser(user: UserEntity): Promise<UserEntity> {
    return this.model.create(user);
  }
}
