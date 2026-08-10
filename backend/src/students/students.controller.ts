import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() dto: CreateStudentDto) {
    return this.studentsService.create(dto);
  }

  @Get()
  get_all_students() {
    return this.studentsService.get_all();
  }

  @Get(':id')
  get_single_student(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.get_single_student(id);
  }

  @Get(':id/curriculums')
  get_student_curriculums(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.get_student_curriculums(id);
  }

  @Get(':id/grades')
  get_student_grades(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.get_student_grades(id);
  }
}
