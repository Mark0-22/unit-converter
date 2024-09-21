import { Test, TestingModule } from '@nestjs/testing';
import { WeigthService } from './weigth.service';

describe('WeigthService', () => {
  let service: WeigthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeigthService],
    }).compile();

    service = module.get<WeigthService>(WeigthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
