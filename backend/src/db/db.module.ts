import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from 'src/db/schema';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { config } from '../../config';

export const DRIZZLE = 'DRIZZLE';
export type Db = NodePgDatabase<typeof schema>;

@Global()
@Module({
  providers: [
    {
      provide: DRIZZLE,
      useFactory: () =>
        drizzle(new Pool({ connectionString: config.databaseUrl }), { schema }),
    },
    DbService,
  ],
  exports: [DRIZZLE],
})
export class DbModule {}
