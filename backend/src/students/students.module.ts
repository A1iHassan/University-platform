import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { CurriculumsModule } from 'src/curriculums/curriculums.module';

@Module({
  imports: [CurriculumsModule],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
