import { Test, TestingModule } from '@nestjs/testing';
import { WeigthController } from './weigth.controller';
import { WeigthService } from './weigth.service';

describe('WeigthController', () => {
  let controller: WeigthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeigthController],
      providers: [WeigthService],
    }).compile();

    controller = module.get<WeigthController>(WeigthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
