import { ForkName } from '@lodestar/params';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // this breaks with:  Error: No "exports" main defined in (...)/node_modules/@lodestar/params/package.json
  console.log(ForkName.altair)
  
  await app.listen(6556);
}
bootstrap();
