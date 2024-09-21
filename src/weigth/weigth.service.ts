import { Injectable } from '@nestjs/common';
import { WeightDto } from './dto/weigth.dto';

@Injectable()
export class WeigthService {
  private readonly conversion: Record<string, number> = {
    milligram: 1000000,
    gram: 1000,
    kilogram: 1,
    ounce: 35.274,
    pound: 2.205,
  };
  convert(body: WeightDto) {
    const fromUnitToMG = body.weigth * this.conversion[body.unit_from];

    const toUnitFromMG = fromUnitToMG / this.conversion[body.unit_to];

    const res = {
      weigth: body.weigth,
      unit_from: body.unit_from,
      unit_to: body.unit_to,
      converted: Math.round(toUnitFromMG * 1000) / 1000,
    };

    return res;
  }
}
