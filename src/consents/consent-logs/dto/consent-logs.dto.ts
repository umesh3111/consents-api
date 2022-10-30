import { ConsentLogEntity } from './../consent-log.entity';

export class ConsentLogsDto implements Readonly<ConsentLogsDto> {
  id: string;
  name: string;
  consent_url: string;
  version: number;
  created_at: Date;

  public static from(consentLog: ConsentLogEntity): ConsentLogsDto {
    return <ConsentLogsDto>{
      id: consentLog.consentId,
      name: consentLog.name,
      consent_url: consentLog.consent_url,
      version: consentLog.version,
      created_at: consentLog.created_at,
    };
  }
}
