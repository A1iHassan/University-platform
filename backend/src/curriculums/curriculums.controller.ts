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
import { CreateCurriculumDto } from './dto/create-curriculum.dto';
import { UpdateCurriculumDto } from './dto/update-curriculum.dto';
import { CurriculumsService } from './curriculums.service';

@ApiTags('Curriculums')
@Controller('curriculums')
export class CurriculumsController {
  constructor(private readonly curriculumsService: CurriculumsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new curriculum' })
  @ApiBody({ type: CreateCurriculumDto })
  @ApiResponse({ status: 201, description: 'Curriculum created successfully' })
  @ApiResponse({ status: 500, description: 'Failed to create curriculum' })
  create(@Body() createCurriculumDto: CreateCurriculumDto) {
    return this.curriculumsService.create(createCurriculumDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all curriculums' })
  @ApiResponse({ status: 200, description: 'List of all curriculums' })
  findAll() {
    return this.curriculumsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single curriculum by ID' })
  @ApiParam({ name: 'id', description: 'Curriculum ID' })
  @ApiResponse({ status: 200, description: 'Curriculum found' })
  @ApiResponse({ status: 404, description: 'Curriculum not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.curriculumsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a curriculum' })
  @ApiParam({ name: 'id', description: 'Curriculum ID' })
  @ApiBody({ type: UpdateCurriculumDto })
  @ApiResponse({ status: 200, description: 'Curriculum updated successfully' })
  @ApiResponse({ status: 404, description: 'Curriculum not found' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCurriculumDto: UpdateCurriculumDto,
  ) {
    return this.curriculumsService.update(id, updateCurriculumDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a curriculum' })
  @ApiParam({ name: 'id', description: 'Curriculum ID' })
  @ApiResponse({ status: 200, description: 'Curriculum deleted successfully' })
  @ApiResponse({ status: 404, description: 'Curriculum not found' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.curriculumsService.remove(id);
  }
}