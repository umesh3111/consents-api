import { ConsentLogsDto } from './consent-logs/dto/consent-logs.dto';
import { ConsentLogsService } from './consent-logs/consent-logs.service';
import { CreateConsentDto } from './dto/consent.dto';
import { ConsentsRepository } from './consents.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConsentEntity } from './consent.entity';
import { CreateConsentLogDto } from './consent-logs/dto/create-log.dto';

@Injectable()
export class ConsentsService {
  constructor(
    private readonly repository: ConsentsRepository,
    private readonly logsService: ConsentLogsService,
  ) {}

  /**
   * Add a new consent
   * @param consent
   * @returns
   */
  public async addConsent(consent: CreateConsentDto): Promise<ConsentEntity> {
    const con = CreateConsentDto.from(consent);
    const res = await this.repository.createConsent(con);
    const log: CreateConsentLogDto = {
      consentId: res.id,
      name: res.name,
      consent_url: res.consent_url,
      version: res.version,
    };
    await this.logsService.createLog(log);
    return res;
  }

  /**
   * Get an individual consent by ID
   * @param id
   * @returns
   */
  public async getConsentById(id: string): Promise<ConsentEntity> {
    return this.repository.getConsent(id);
  }

  /**
   * Updates the consent document for the newly available consent
   * All the nentries of the previous versions are stored in consent logs
   * Adds a new entry to the log with the updated version
   * All the tracking of multiple versions is stored inside the logs table/ledger
   * @param id
   * @param consent_url
   * @returns
   */
  public async updateConsent(
    id: string,
    consent_url: string,
  ): Promise<ConsentEntity> {
    const consent = await this.repository.getConsent(id);
    if (typeof consent === 'undefined' || consent === null) {
      throw new BadRequestException('Invalid consent ID');
    }

    if (consent.consent_url === consent_url) {
      throw new BadRequestException(
        'Latest version already on the same consent URL!',
      );
    }
    consent.version++;
    consent.consent_url = consent_url;
    consent.created_at = new Date();

    await this.repository.updateConsent(consent);
    const log: CreateConsentLogDto = {
      consentId: consent.id,
      name: consent.name,
      consent_url: consent.consent_url,
      version: consent.version,
    };
    await this.logsService.createLog(log);
    return consent;
  }

  /**
   * Returns all consent versions/logs by consentId
   * @param id
   * @returns
   */
  public async getConsentVersionsById(id: string): Promise<ConsentLogsDto[]> {
    return this.logsService.getLogsByConsentId(id);
  }

  /**
   *
   * @returns all varsions of all consents
   * i.e all consent logs
   */
  public async getAllConsentLogs(): Promise<ConsentLogsDto[]> {
    return this.logsService.getAllLogs();
  }
}
