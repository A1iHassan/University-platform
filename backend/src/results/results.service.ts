import { eq } from 'drizzle-orm';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import type { CreateResultDto } from './dto/create-result.dto';
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
}