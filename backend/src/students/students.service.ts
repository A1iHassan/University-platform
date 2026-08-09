import { eq } from 'drizzle-orm';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import type { CreateStudentDto } from './dto/create-student.dto';
import type { Db } from 'src/db/db.module';
import { DRIZZLE } from 'src/db/db.module';
import { students } from 'src/db/schema';

@Injectable()
export class StudentsService {
  logger = new Logger(StudentsService.name);

  constructor(@Inject(DRIZZLE) private readonly db: Db) {}

  async create(createStudentDto: CreateStudentDto) {
    try {
      const [student] = await this.db
        .insert(students)
        .values(createStudentDto)
        .returning();
      return { status: 'success', data: student };
    } catch (error) {
      this.logger.error('error creating a student: ', error);
      throw new InternalServerErrorException('cant create a student');
    }
  }

  async get_all() {
    try {
      const all_students = await this.db.select().from(students);
      return { status: 'success', data: all_students };
    } catch (error) {
      this.logger.error('error fetching students: ', error);
      throw new InternalServerErrorException('cant fetch students');
    }
  }

  async get_single_student(id: number) {
    try {
      const [student] = await this.db
        .select()
        .from(students)
        .where(eq(students.id, id));
      if (!student) throw new NotFoundException('student not found');
      return { status: 'success', data: student };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      this.logger.error('error fetching a student: ', error);
      throw new InternalServerErrorException('cant fetch student');
    }
  }

  async getStudentCurriculums(id: number) {
    try {
      const student = await this.db.query.students.findFirst({
        where: eq(students.id, id),
        columns: { id: true, name: true },
        with: {
          results: {
            columns: { id: false, student_id: false },
            with: {
              curriculum: true,
            },
          },
        },
      });
      if (!student) throw new NotFoundException('student not found');
      return { status: 'success', data: student };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      this.logger.error('error fetching student curriculums: ', error);
      throw new InternalServerErrorException('failed to fetch student curriculums');
    }
  }

  async getStudentGrades(id: number) {
    try {
      const student = await this.db.query.students.findFirst({
        where: eq(students.id, id),
        columns: { id: true, name: true },
        with: {
          results: {
            with: {
              curriculum: { columns: { id: true, name: true, year: true } },
            },
          },
        },
      });
      if (!student) throw new NotFoundException('student not found');
      return { status: 'success', data: student };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      this.logger.error('error fetching student grades: ', error);
      throw new InternalServerErrorException('failed to fetch student grades');
    }
  }
}

