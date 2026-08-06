import { pgEnum, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const roleEnum = pgEnum('role', ['student', 'admin'])

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  uni_number: text('uni_number').notNull().unique(),
  password: text('password').notNull(),
  role: roleEnum('role').notNull().default('student'),
})

export type User = typeof users.$inferSelect
