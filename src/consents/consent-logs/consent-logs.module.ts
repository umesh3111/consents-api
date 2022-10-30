import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { ConsentLogsRepository } from './consent-logs.repository';
import { ConsentLogsService } from './consent-logs.service';

@Module({
  imports: [InMemoryDBModule.forFeature('consent-logs', {})],
  providers: [ConsentLogsService, ConsentLogsRepository],
  exports: [ConsentLogsService],
})
export class ConsentLogsModule {}
