import { ConsentLogEntity } from './consent-log.entity';
import {
  InjectInMemoryDBService,
  InMemoryDBService,
} from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsentLogsRepository {
  constructor(
    @InjectInMemoryDBService('consent-logs')
    private model: InMemoryDBService<ConsentLogEntity>,
  ) {}

  /**
   * Get logs by consent Id
   */
  public async getLogsByConsentId(id: string): Promise<ConsentLogEntity[]> {
    return this.model.query((record) => {
      return record.consentId === id;
    });
  }

  /**
   * Add a consent log
   * @param log
   * @returns
   */
  public async addConsentLog(log: ConsentLogEntity): Promise<ConsentLogEntity> {
    console.log(log);

    return this.model.create(log);
  }

  /**
   * Get all logs in the database
   * @returns
   */
  public async getAllLogs(): Promise<ConsentLogEntity[]> {
    return this.model.getAll();
  }
}
