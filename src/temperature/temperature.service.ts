import { Injectable } from '@nestjs/common';
import { TemperatueDto } from './dto/tempertaure.dto';

@Injectable()
export class TemperatureService {
  private readonly conversion: Record<
    string,
    Record<string, (temp: number) => number>
  > = {
    Celsius: {
      toKelvin: (temp: number) => temp + 273.15,
      fromKelvin: (temp: number) => temp - 273.15,
    },
    Fahrenheit: {
      toKelvin: (temp: number) => (temp - 32) * (5 / 9) + 273.15,
      fromKelvin: (temp: number) => (temp - 273.15) * (9 / 5) + 32,
    },
    Kelvin: {
      toKelvin: (temp: number) => temp,
      fromKelvin: (temp: number) => temp,
    },
  };
  convert(body: TemperatueDto) {
    const kelvinTemp = this.conversion[body.unit_from].toKelvin(
      +body.temperature,
    );

    const convertedTemp = this.conversion[body.unit_to].fromKelvin(kelvinTemp);

    const res = {
      ...body,
      converted: Math.round(convertedTemp * 1000) / 1000,
    };

    return res;
  }
}
