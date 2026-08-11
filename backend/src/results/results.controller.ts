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
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { ResultsService } from './results.service';

@ApiTags('Results')
@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new result' })
  @ApiBody({ type: CreateResultDto })
  @ApiResponse({ status: 201, description: 'Result created successfully' })
  @ApiResponse({ status: 500, description: 'Failed to create result' })
  create(@Body() createResultDto: CreateResultDto) {
    return this.resultsService.create(createResultDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all results' })
  @ApiResponse({ status: 200, description: 'List of all results' })
  findAll() {
    return this.resultsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single result by ID' })
  @ApiParam({ name: 'id', description: 'Result ID' })
  @ApiResponse({ status: 200, description: 'Result found' })
  @ApiResponse({ status: 404, description: 'Result not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.resultsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a result' })
  @ApiParam({ name: 'id', description: 'Result ID' })
  @ApiBody({ type: UpdateResultDto })
  @ApiResponse({ status: 200, description: 'Result updated successfully' })
  @ApiResponse({ status: 404, description: 'Result not found' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateResultDto: UpdateResultDto,
  ) {
    return this.resultsService.update(id, updateResultDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a result' })
  @ApiParam({ name: 'id', description: 'Result ID' })
  @ApiResponse({ status: 200, description: 'Result deleted successfully' })
  @ApiResponse({ status: 404, description: 'Result not found' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.resultsService.remove(id);
  }
}