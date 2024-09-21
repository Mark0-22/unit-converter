import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { TemperatureService } from './temperature.service';
import { Response } from 'express';
import { TemperatueDto } from './dto/tempertaure.dto';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Get()
  result(@Res() res: Response) {
    res.status(200).render('temperature', {
      pageTitle: 'Temperature',
      path: '/temperature',
    });
  }

  @Post()
  async convert(@Body() temp: TemperatueDto, @Res() res: Response) {
    const result = await this.temperatureService.convert(temp);
    res.status(201).render('result', {
      pageTitle: 'Temperature',
      measurement: 'Temperature',
      path: '/temperature',
      value: result.temperature,
      unit_from: result.unit_from,
      unit_to: result.unit_to,
      converted: result.converted,
    });
  }
}
