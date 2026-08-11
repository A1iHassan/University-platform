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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { CreateStudentDto } from './dto/create-student.dto';
import { ResultDto } from './dto/result.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentsService } from './students.service';

@ApiTags('Students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new student' })
  @ApiBody({ type: CreateStudentDto })
  @ApiResponse({ status: 201, description: 'Student created successfully' })
  @ApiResponse({ status: 500, description: 'Failed to create student' })
  create(@Body() dto: CreateStudentDto) {
    return this.studentsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all students' })
  @ApiResponse({ status: 200, description: 'List of all students' })
  get_all_students() {
    return this.studentsService.get_all();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single student by ID' })
  @ApiParam({ name: 'id', description: 'Student ID' })
  @ApiResponse({ status: 200, description: 'Student found' })
  @ApiResponse({ status: 404, description: 'Student not found' })
  get_single_student(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.get_single_student(id);
  }

  @Get(':id/curriculums')
  @ApiOperation({ summary: 'Get all curriculums enrolled by a student' })
  @ApiParam({ name: 'id', description: 'Student ID' })
  @ApiResponse({ status: 200, description: 'Student curriculums list' })
  @ApiResponse({ status: 404, description: 'Student not found' })
  get_student_curriculums(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.get_student_curriculums(id);
  }

  @Post(':id/:curriculum_id')
  @ApiOperation({ summary: 'Enroll a student in a curriculum' })
  @ApiParam({ name: 'id', description: 'Student ID' })
  @ApiParam({ name: 'curriculum_id', description: 'Curriculum ID' })
  @ApiBody({
    type: ResultDto,
    description: 'Optional grade and letter_grade to fill in the result',
    required: false,
  })
  @ApiResponse({ status: 201, description: 'Student enrolled successfully' })
  @ApiResponse({ status: 404, description: 'Student or curriculum not found' })
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
  @ApiOperation({ summary: 'Update a result for a specific student' })
  @ApiParam({ name: 'id', description: 'Student ID' })
  @ApiParam({ name: 'result_id', description: 'Result ID' })
  @ApiBody({ type: ResultDto })
  @ApiResponse({ status: 200, description: 'Result updated successfully' })
  @ApiResponse({ status: 404, description: 'Result not found' })
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
  @ApiOperation({ summary: 'Delete a result for a specific student' })
  @ApiParam({ name: 'id', description: 'Student ID' })
  @ApiParam({ name: 'result_id', description: 'Result ID' })
  @ApiResponse({ status: 200, description: 'Result deleted successfully' })
  @ApiResponse({ status: 404, description: 'Result not found' })
  remove_student_result(
    @Param('id', ParseIntPipe) id: number,
    @Param('result_id', ParseIntPipe) result_id: number,
  ) {
    return this.studentsService.remove_student_result(id, result_id);
  }

  @Get(':id/grades')
  @ApiOperation({ summary: 'Get grades for a specific student' })
  @ApiParam({ name: 'id', description: 'Student ID' })
  @ApiResponse({ status: 200, description: 'Student grades' })
  @ApiResponse({ status: 404, description: 'Student not found' })
  get_student_grades(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.get_student_grades(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a student' })
  @ApiParam({ name: 'id', description: 'Student ID' })
  @ApiBody({ type: UpdateStudentDto })
  @ApiResponse({ status: 200, description: 'Student updated successfully' })
  @ApiResponse({ status: 404, description: 'Student not found' })
  update_student(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentsService.update_student(id, updateStudentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a student' })
  @ApiParam({ name: 'id', description: 'Student ID' })
  @ApiResponse({ status: 200, description: 'Student deleted successfully' })
  @ApiResponse({ status: 404, description: 'Student not found' })
  remove_student(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.remove_student(id);
  }
}