import { Module } from '@nestjs/common';
import { WeigthService } from './weigth.service';
import { WeigthController } from './weigth.controller';

@Module({
  controllers: [WeigthController],
  providers: [WeigthService],
})
export class WeigthModule {}
