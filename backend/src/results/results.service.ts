import { eq } from 'drizzle-orm';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import type { CreateResultDto } from './dto/create-result.dto';
import type { UpdateResultDto } from './dto/update-result.dto';
import type { Db } from 'src/db/db.module';
import { DRIZZLE } from 'src/db/db.module';
import { results } from 'src/db/schema';

@Injectable()
export class ResultsService {
  logger = new Logger(ResultsService.name);

  constructor(@Inject(DRIZZLE) private readonly db: Db) {}

  async create(createResultDto: CreateResultDto) {
    try {
      const [result] = await this.db
        .insert(results)
        .values(createResultDto)
        .returning();
      return { status: 'success', data: result };
    } catch (error) {
      this.logger.error('error creating a result: ', error);
      throw new InternalServerErrorException('cant create a result');
    }
  }

  async findAll() {
    try {
      const all_results = await this.db.select().from(results);
      return { status: 'success', data: all_results };
    } catch (error) {
      this.logger.error('error fetching results: ', error);
      throw new InternalServerErrorException('cant fetch results');
    }
  }

  async findOne(id: number) {
    try {
      const [result] = await this.db
        .select()
        .from(results)
        .where(eq(results.id, id));
      if (!result) throw new NotFoundException('result not found');
      return { status: 'success', data: result };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      this.logger.error('error fetching a result: ', error);
      throw new InternalServerErrorException('cant fetch result');
    }
  }

  async update(id: number, updateResultDto: UpdateResultDto) {
    try {
      const [updated] = await this.db
        .update(results)
        .set({ ...updateResultDto, updated_at: new Date() })
        .where(eq(results.id, id))
        .returning();
      if (!updated) throw new NotFoundException('result not found');
      return { status: 'success', data: updated };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      this.logger.error('error updating a result: ', error);
      throw new InternalServerErrorException('cant update result');
    }
  }

  async remove(id: number) {
    try {
      const [deleted] = await this.db
        .delete(results)
        .where(eq(results.id, id))
        .returning();
      if (!deleted) throw new NotFoundException('result not found');
      return { status: 'success', data: deleted };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      this.logger.error('error deleting a result: ', error);
      throw new InternalServerErrorException('cant delete result');
    }
  }
}