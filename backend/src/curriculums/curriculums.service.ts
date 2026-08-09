import { eq } from 'drizzle-orm';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import type { CreateCurriculumDto } from './dto/create-curriculum.dto';
import type { Db } from 'src/db/db.module';
import { DRIZZLE } from 'src/db/db.module';
import { curriculums } from 'src/db/schema';

@Injectable()
export class CurriculumsService {
  logger = new Logger(CurriculumsService.name);

  constructor(@Inject(DRIZZLE) private readonly db: Db) {}

  async create(createCurriculumDto: CreateCurriculumDto) {
    try {
      const [curriculum] = await this.db
        .insert(curriculums)
        .values(createCurriculumDto)
        .returning();
      return { status: 'success', data: curriculum };
    } catch (error) {
      this.logger.error('error creating a curriculum: ', error);
      throw new InternalServerErrorException('cant create a curriculum');
    }
  }

  async findAll() {
    try {
      const all_curriculums = await this.db.select().from(curriculums);
      return { status: 'success', data: all_curriculums };
    } catch (error) {
      this.logger.error('error fetching curriculums: ', error);
      throw new InternalServerErrorException('cant fetch curriculums');
    }
  }

  async findOne(id: number) {
    try {
      const [curriculum] = await this.db
        .select()
        .from(curriculums)
        .where(eq(curriculums.id, id));
      if (!curriculum) throw new NotFoundException('curriculum not found');
      return { status: 'success', data: curriculum };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      this.logger.error('error fetching a curriculum: ', error);
      throw new InternalServerErrorException('cant fetch curriculum');
    }
  }

  async remove(id: number) {
    try {
      const [deleted] = await this.db
        .delete(curriculums)
        .where(eq(curriculums.id, id))
        .returning();
      if (!deleted) throw new NotFoundException('curriculum not found');
      return { status: 'success', data: deleted };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      this.logger.error('error deleting a curriculum: ', error);
      throw new InternalServerErrorException('cant delete curriculum');
    }
  }
}

