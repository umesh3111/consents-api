import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface ConsentLogEntity extends InMemoryDBEntity {
  /**
   * UUID of the consent
   */
  id: string;

  /**
   * UUID of the consent
   */
  consentId: string;

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
