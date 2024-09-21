import { Module } from '@nestjs/common';
import { LengthModule } from './length/length.module';
import { WeigthModule } from './weigth/weigth.module';
import { TemperatureModule } from './temperature/temperature.module';
import { AppController } from './app.controller';

@Module({
  imports: [LengthModule, WeigthModule, TemperatureModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
