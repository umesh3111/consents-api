import {
  InjectInMemoryDBService,
  InMemoryDBService,
} from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { ConsentEntity } from './consent.entity';

@Injectable()
export class ConsentsRepository {
  constructor(
    @InjectInMemoryDBService('consents')
    private model: InMemoryDBService<ConsentEntity>,
  ) {}

  /**
   * Returns a consent by it's ID
   * @param id
   * @returns
   */
  public async getConsent(id: string): Promise<ConsentEntity> {
    return this.model.get(id);
  }

  /**
   * Crates a new consent
   * @param consent
   * @returns
   */
  public async createConsent(consent: ConsentEntity): Promise<ConsentEntity> {
    return this.model.create(consent);
  }

  /**
   * Updates a consent
   * @param consent
   * @returns
   */
  public async updateConsent(consent: ConsentEntity): Promise<void> {
    return this.model.update(consent);
  }
}
