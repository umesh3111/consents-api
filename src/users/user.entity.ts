import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface UserEntity extends InMemoryDBEntity {
  /**
   * UUID of the user
   */
  id: string;

  /**
   * First Name
   */
  firstName: string;

  /**
   * Last Name
   */
  lastName: string;

  /**
   * Email of the user
   */
  email: string;

  /**
   * Flag which states if the user if active or not
   */
  active: boolean;
}
