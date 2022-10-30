import { ConsentLogEntity } from './../consent-log.entity';
import { v1 as uuidv1 } from 'uuid';

export class CreateConsentLogDto implements Readonly<CreateConsentLogDto> {
  consentId: string;
  name: string;
  consent_url: string;
  version: number;

  public static from(con: CreateConsentLogDto): ConsentLogEntity {
    return <ConsentLogEntity>{
      id: uuidv1(),
      name: con.name,
      consentId: con.consentId,
      consent_url: con.consent_url,
      created_at: new Date(),
      version: con.version,
    };
  }
}
