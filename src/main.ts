import { NestFactory } from '@nestjs/core';
import { DataAssetsModule } from './data-asset.module';
import { TestService } from './test.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(DataAssetsModule);
  const testService = app.get(TestService);
  console.log('Creating test document...');
  await testService.createTest1();
  await testService.createTest2();
  console.log('Test document created.');
  await app.close();
}

bootstrap();
