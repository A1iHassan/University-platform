import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { ResultDto } from './dto/result.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
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

  @Post(':id/:curriculum_id')
  add_student_to_curriculum(
    @Param('id', ParseIntPipe) id: number,
    @Param('curriculum_id', ParseIntPipe) curriculum_id: number,
    @Body() optional_result: ResultDto,
  ) {
    return this.studentsService.add_student_to_curriculum(
      id,
      curriculum_id,
      optional_result,
    );
  }

  @Patch(':id/results/:result_id')
  update_student_result(
    @Param('id', ParseIntPipe) id: number,
    @Param('result_id', ParseIntPipe) result_id: number,
    @Body() result_update: ResultDto,
  ) {
    return this.studentsService.update_student_result(
      id,
      result_id,
      result_update,
    );
  }

  @Delete(':id/results/:result_id')
  remove_student_result(
    @Param('id', ParseIntPipe) id: number,
    @Param('result_id', ParseIntPipe) result_id: number,
  ) {
    return this.studentsService.remove_student_result(id, result_id);
  }

  @Get(':id/grades')
  get_student_grades(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.get_student_grades(id);
  }

  @Patch(':id')
  update_student(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentsService.update_student(id, updateStudentDto);
  }

  @Delete(':id')
  remove_student(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.remove_student(id);
  }
}
