import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './common/logging/logging.interceptor';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalInterceptors(new LoggingInterceptor());
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  logger.log(`Application is running on: http://localhost:${port}`);
}

bootstrap().catch((err: Error) => {
  new Logger('Bootstrap').fatal('Application failed to start', err.stack);
  process.exit(1);
});
