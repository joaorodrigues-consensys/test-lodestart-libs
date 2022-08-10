import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  async getHello(): Promise<string> {
    const p = await import('@lodestar/params')
    console.log(p)
    return p.ACTIVE_PRESET.toString();
  }
}
