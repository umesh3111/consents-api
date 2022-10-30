import { ConsentsRepository } from './consents.repository';
import { Module } from '@nestjs/common';
import { ConsentsService } from './consents.service';
import { ConsentsController } from './consents.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { ConsentLogsModule } from './consent-logs/consent-logs.module';

@Module({
  imports: [InMemoryDBModule.forFeature('consents', {}), ConsentLogsModule],
  providers: [ConsentsService, ConsentsRepository],
  controllers: [ConsentsController],
})
export class ConsentsModule {}
