import { ConsentLogsDto } from './consent-logs/dto/consent-logs.dto';
import { CreateConsentDto, UpdateConsentDto } from './dto/consent.dto';
import { ConsentsService } from './consents.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ConsentEntity } from './consent.entity';
import {
  ApiAcceptedResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('consent')
@ApiTags('Consent')
export class ConsentsController {
  constructor(private readonly service: ConsentsService) {}

  @Post('target')
  @ApiCreatedResponse({
    description: 'Consent Created',
  })
  public async createConsent(
    @Body() body: CreateConsentDto,
  ): Promise<ConsentEntity> {
    return this.service.addConsent(body);
  }

  // @Get(':id')
  // public async getConsentById(@Param('id') id: string): Promise<ConsentEntity> {
  //   return this.service.getConsentById(id);
  // }

  @Patch('target/:targetId')
  @ApiBadRequestResponse({
    description:
      'Could not update. Wrong request! Check Api reponse for details',
  })
  public async patchTarget(
    @Param('targetId') id: string,
    @Body()
    body: UpdateConsentDto,
  ): Promise<ConsentEntity> {
    return this.service.updateConsent(id, body.consent_url);
  }

  @Get('target/:targetId')
  @ApiOkResponse({ description: 'Accepted' })
  @ApiBadRequestResponse({ description: 'Invalid consent Id' })
  public async getAllVersionsOfConsent(
    @Param('targetId') id: string,
  ): Promise<ConsentLogsDto[]> {
    return this.service.getConsentVersionsById(id);
  }

  @Get('target')
  @ApiOkResponse({ description: 'Success' })
  public async getAllConsentVersions(): Promise<ConsentLogsDto[]> {
    return this.service.getAllConsentLogs();
  }
}
