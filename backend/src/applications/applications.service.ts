import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { type Db, DRIZZLE } from 'src/db/db.module';
import { applications, students } from 'src/db/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class ApplicationsService {
  constructor(@Inject(DRIZZLE) private readonly db: Db) {}

  logger = new Logger(ApplicationsService.name);
  async create(createApplicationDto: CreateApplicationDto) {
    try {
      const [application] = await this.db
        .insert(applications)
        .values(createApplicationDto)
        .returning();
      this.logger.log(`application created successfully id: ${application.id}`);
      return { status: 'success', data: application };
    } catch (error) {
      this.logger.error('error creating a application: ', error);
      throw new InternalServerErrorException('cant create a application');
    }
  }

  async findAll() {
    const applications = await this.db.query.applications.findMany();
    return applications ?? [];
  }

  async findOne(id: number) {
    const application = await this.db.query.applications.findFirst({
      where: eq(applications.id, id),
    });
    return application ?? [];
  }

  async update(id: number, updateApplicationDto: UpdateApplicationDto) {
    try {
      return await this.db.transaction(async (tx) => {
        const [updated_application] = await tx
          .update(applications)
          .set(updateApplicationDto)
          .where(eq(applications.id, id))
          .returning();

        if (updated_application.status === 'accepted') {
          const existing = updated_application.national_id
            ? await tx.query.students.findFirst({
                where: eq(
                  students.national_id,
                  updated_application.national_id,
                ),
              })
            : null;
          if (!existing) {
            await tx.insert(students).values({
              name: updated_application.name,
              age: updated_application.age,
              blood_type: updated_application.blood_type,
              school_degree: updated_application.school_degree,
              certificate: updated_application.certificate,
              national_id: updated_application.national_id,
              year: updated_application.year,
            });
            this.logger.log(
              `accepted application ${id} moved to students table`,
            );
          }
        }
        return [updated_application];
      });
    } catch (error) {
      this.logger.error('error updating application: ', error);
      throw new InternalServerErrorException('cant update application');
    }
  }

  remove(id: number) {
    return `This action removes a #${id} application`;
  }
}
