import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { WeigthService } from './weigth.service';
import { Response } from 'express';
import { WeightDto } from './dto/weigth.dto';

@Controller('weigth')
export class WeigthController {
  constructor(private readonly weigthService: WeigthService) {}

  @Get()
  result(@Res() res: Response) {
    res.status(200).render('weigth', { pageTitle: 'Tezina', path: '/weigth' });
  }

  @Post()
  async convert(@Body() weightDto: WeightDto, @Res() res: Response) {
    const result = await this.weigthService.convert(weightDto);
    res.status(201).render('result', {
      pageTitle: 'Tezina',
      measurement: 'Weigth',
      path: '/weigth',
      value: result.weigth,
      unit_from: result.unit_from,
      unit_to: result.unit_to,
      converted: result.converted,
    });
  }
}
