import { Injectable } from '@nestjs/common';
import { CreateLengthDto } from './dto/createLength.dto';

@Injectable()
export class LengthService {
  private readonly conversion: Record<string, number> = {
    millimeter: 1,
    centimeter: 10,
    meter: 1000,
    kilometer: 1000000,
    inch: 25.4,
    foot: 304.8,
    yard: 914.4,
    mile: 1609344,
  };
  create(createLengthDto: CreateLengthDto) {
    const fromUnitToMM =
      createLengthDto.length * this.conversion[createLengthDto.unit_from];

    const toUnitFromMM =
      fromUnitToMM / this.conversion[createLengthDto.unit_to];
    const res = {
      length: +createLengthDto.length,
      unit_from: createLengthDto.unit_from,
      unit_to: createLengthDto.unit_to,
      converted: Math.round(toUnitFromMM * 1000) / 1000,
    };
    return res;
  }

  findAll() {
    return `This action returns all length`;
  }
}
