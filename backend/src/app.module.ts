import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { StudentsModule } from './students/students.module';
import { CurriculumsModule } from './curriculums/curriculums.module';
import { ResultsModule } from './results/results.module';
import { ApplicationsModule } from './applications/applications.module';

@Module({
  imports: [
    AuthModule,
    DbModule,
    StudentsModule,
    CurriculumsModule,
    ResultsModule,
    ApplicationsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
