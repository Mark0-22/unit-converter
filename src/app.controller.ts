import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  home(@Res() res: Response) {
    res.status(200).render('index', { pageTitle: 'Home', path: '/' });
  }
}
