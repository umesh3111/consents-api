import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface ConsentEntity extends InMemoryDBEntity {
  /**
   * UUID of the consent
   */
  id: string;

  /**
   * First Name
   */
  name: string;

  /**
   * Last Name
   */
  consent_url: string;

  /**
   * Email of the user
   */
  created_at: Date;

  /**
   * Flag which states if the user if active or not
   */
  version: number;
}
