import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { LengthService } from './length.service';
import { Response } from 'express';
import { CreateLengthDto } from './dto/createLength.dto';

@Controller('length')
export class LengthController {
  constructor(private readonly lengthService: LengthService) {}

  @Get()
  result(@Res() res: Response) {
    res.status(200).render('length', { pageTitle: 'Length', path: '/length' });
  }

  @Post()
  async create(@Body() createLengthDto: CreateLengthDto, @Res() res: Response) {
    const result = await this.lengthService.create(createLengthDto);
    res.status(201).render('result', {
      pageTitle: 'Length',
      measurement: 'Length',
      path: '/length',
      value: result.length,
      unit_from: result.unit_from,
      unit_to: result.unit_to,
      converted: result.converted,
    });
  }
}
