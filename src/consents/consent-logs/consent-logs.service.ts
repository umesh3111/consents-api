import { ConsentLogEntity } from './consent-log.entity';
import { CreateConsentLogDto } from './dto/create-log.dto';
import { ConsentLogsRepository } from './consent-logs.repository';
import { Injectable, BadRequestException } from '@nestjs/common';
import { ConsentLogsDto } from './dto/consent-logs.dto';

@Injectable()
export class ConsentLogsService {
  constructor(private readonly repository: ConsentLogsRepository) {}

  /**
   * Add a new log for a consent
   * @param log
   * @returns
   */
  public async createLog(log: CreateConsentLogDto): Promise<ConsentLogEntity> {
    const data: ConsentLogEntity = CreateConsentLogDto.from(log);
    return this.repository.addConsentLog(data);
  }

  /**
   * Returns all consent versions/logs by consentId
   * @param consentId
   * @returns
   */
  public async getLogsByConsentId(
    consentId: string,
  ): Promise<ConsentLogsDto[]> {
    const logs = await this.repository.getLogsByConsentId(consentId);
    const res: ConsentLogsDto[] = [];
    if (typeof logs === 'undefined' || logs === null || logs.length <= 0) {
      throw new BadRequestException('No logs found!');
    }

    logs.forEach((l) => {
      res.push(ConsentLogsDto.from(l));
    });
    return res;
  }

  /**
   * Returns all varsions of all consents
   * i.e all consent logs
   * @returns
   */
  public async getAllLogs(): Promise<ConsentLogsDto[]> {
    let logs = await this.repository.getAllLogs();
    // console.log(logs);

    const res: ConsentLogsDto[] = [];
    if (typeof logs === 'undefined' || logs === null || logs.length <= 0) {
      logs = [];
    }
    logs.forEach((l) => {
      res.push(ConsentLogsDto.from(l));
    });
    return res;
  }
}
