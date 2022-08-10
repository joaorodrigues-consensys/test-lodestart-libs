import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // this works too
  const p = await import('@lodestar/params')
  console.log(p.ForkName.altair)

  // fixed:
  // console.log(params.ForkName.altair)
  const d = await import('@lodestar/state-transition')
  console.log(d)
  await app.listen(6556);
}
bootstrap();
