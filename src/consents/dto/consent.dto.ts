import { ConsentEntity } from '../consent.entity';
import { v1 as uuidv1 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateConsentDto implements Readonly<CreateConsentDto> {
  @ApiProperty({
    description: 'Name of the Consent',
    example: 'pharmacy.allow_marketing_emails',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Url of the new consent being approved',
    example: 'http://example.com/marketing_terms_2',
  })
  @IsString()
  consent_url: string;

  public static from(con: CreateConsentDto): ConsentEntity {
    return <ConsentEntity>{
      id: uuidv1(),
      name: con.name,
      consent_url: con.consent_url,
      created_at: new Date(),
      version: 0,
    };
  }
}

export class UpdateConsentDto {
  @ApiProperty({
    description: 'Url of the new consent being approved',
    example: 'http://example.com/marketing_terms_2',
  })
  @IsString()
  consent_url: string;
}
