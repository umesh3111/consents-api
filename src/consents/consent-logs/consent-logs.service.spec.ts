import { Test, TestingModule } from '@nestjs/testing';
import { ConsentLogsService } from './consent-logs.service';

describe('ConsentLogsService', () => {
  let service: ConsentLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsentLogsService],
    }).compile();

    service = module.get<ConsentLogsService>(ConsentLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
