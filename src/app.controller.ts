import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    const p = await import('@lodestar/params')
    console.log(p)
    return this.appService.getHello();
  }
}
