import { and, eq } from 'drizzle-orm';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import type { CreateStudentDto } from './dto/create-student.dto';
import type { UpdateStudentDto } from './dto/update-student.dto';
import type { Db } from 'src/db/db.module';
import { DRIZZLE } from 'src/db/db.module';
import { results, students } from 'src/db/schema';
import { CurriculumsService } from 'src/curriculums/curriculums.service';
import type { ResultDto } from './dto/result.dto';

@Injectable()
export class StudentsService {
  logger = new Logger(StudentsService.name);

  constructor(
    @Inject(DRIZZLE) private readonly db: Db,
    private readonly curriculum_service: CurriculumsService,
  ) {}

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

  async get_student_curriculums(id: number) {
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
      throw new InternalServerErrorException(
        'failed to fetch student curriculums',
      );
    }
  }

  async get_student_grades(id: number) {
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
  async add_student_to_curriculum(
    student_id: number,
    curriculum_id: number,
    optional_result?: ResultDto,
  ) {
    const student_found = await this.verify_student_exist(student_id);
    const curriculum_found =
      await this.curriculum_service.verify_curriculum_exist(curriculum_id);

    if (!student_found || !curriculum_found)
      throw new NotFoundException(
        `student or curriculum not found, student available: ${student_found} curriculum available: ${curriculum_found}`,
      );
    try {
      const [adding_result] = await this.db
        .insert(results)
        .values({
          student_id: student_id,
          curriculum_id: curriculum_id,
          grade: optional_result?.grade,
          letter_grade: optional_result?.letter_grade,
        })
        .returning();

      return { status: 'success', adding_result };
    } catch (error) {
      this.logger.error('error adding a student to a curriculum: ', error);
      throw new InternalServerErrorException(
        'could not add the student to the curriculum',
      );
    }
  }

  async update_student_result(
    student_id: number,
    result_id: number,
    result_update: ResultDto,
  ) {
    try {
      const [updated_result] = await this.db
        .update(results)
        .set({ ...result_update, updated_at: new Date() })
        .where(
          and(eq(results.id, result_id), eq(results.student_id, student_id)),
        )
        .returning();
      if (!updated_result) throw new NotFoundException('result not found');
      return { status: 'success', data: updated_result };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      this.logger.error('error updating a result: ', error);
      throw new InternalServerErrorException('cant update result');
    }
  }

  async remove_student_result(student_id: number, result_id: number) {
    try {
      const [deleted_result] = await this.db
        .delete(results)
        .where(
          and(eq(results.id, result_id), eq(results.student_id, student_id)),
        )
        .returning();
      if (!deleted_result) throw new NotFoundException('result not found');
      return { status: 'success', data: deleted_result };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      this.logger.error('error deleting a result: ', error);
      throw new InternalServerErrorException('cant delete result');
    }
  }

  async update_student(id: number, updateStudentDto: UpdateStudentDto) {
    try {
      const [updated_student] = await this.db
        .update(students)
        .set({ ...updateStudentDto, updated_at: new Date() })
        .where(eq(students.id, id))
        .returning();
      if (!updated_student) throw new NotFoundException('student not found');
      return { status: 'success', data: updated_student };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      this.logger.error('error updating a student: ', error);
      throw new InternalServerErrorException('cant update student');
    }
  }

  async remove_student(id: number) {
    try {
      const [deleted_student] = await this.db
        .delete(students)
        .where(eq(students.id, id))
        .returning();
      if (!deleted_student) throw new NotFoundException('student not found');
      return { status: 'success', data: deleted_student };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      this.logger.error('error deleting a student: ', error);
      throw new InternalServerErrorException('cant delete student');
    }
  }

  async verify_student_exist(student_id: number): Promise<boolean> {
    const student = await this.db.query.students.findFirst({
      where: eq(students.id, student_id),
    });
    return student ? true : false;
  }
}
