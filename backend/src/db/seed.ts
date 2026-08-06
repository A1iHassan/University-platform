import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as bcrypt from 'bcryptjs';
import * as schema from './schema';
import { Logger } from '@nestjs/common';
import { config } from '../../config';

const logger = new Logger('seed');

async function main() {
  const db = drizzle(new Pool({ connectionString: config.databaseUrl }), {
    schema,
  });
  const uni_number = process.argv[2] ?? '12345678';
  const password = process.argv[3] ?? 'password123';
  const hashed = await bcrypt.hash(password, 10);
  const [user] = await db
    .insert(schema.users)
    .values({ uni_number, password: hashed })
    .onConflictDoNothing()
    .returning();
  logger.log(
    user
      ? `Seeded user ${user.uni_number} (${user.role})`
      : `User ${uni_number} already exists`,
  );
  process.exit(0);
}

void main();
