import { relations } from 'drizzle-orm';
import { timestamp } from 'drizzle-orm/pg-core';
import { integer } from 'drizzle-orm/pg-core';
import { pgEnum, pgTable, text, serial } from 'drizzle-orm/pg-core';

export const letter_grade_enum = pgEnum('letter_grade', [
  'A+',
  'A',
  'B+',
  'B',
  'C+',
  'C',
  'D',
  'F',
]);
export const role_enum = pgEnum('role', ['instructor', 'student', 'admin']);
export const blood_type_enum = pgEnum('blood', [
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
]);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
  role: role_enum('role').notNull().default('student'),
  created_at: timestamp({ withTimezone: true }).defaultNow(),
  updated_at: timestamp({ withTimezone: true }).defaultNow(),
});

export const curriculums = pgTable('curriculums', {
  id: serial().primaryKey(),
  name: text().notNull(),
  year: text().notNull(),
  created_at: timestamp({ withTimezone: true }).defaultNow(),
  updated_at: timestamp({ withTimezone: true }).defaultNow(),
});

export const results = pgTable('results', {
  id: serial().primaryKey(),
  student_id: serial()
    .notNull()
    .references(() => students.id),
  curriculum_id: serial()
    .notNull()
    .references(() => curriculums.id),
  grade: text().notNull(),
  letter_grade: letter_grade_enum(),
  created_at: timestamp({ withTimezone: true }).defaultNow(),
  updated_at: timestamp({ withTimezone: true }).defaultNow(),
});

export const students = pgTable('students', {
  id: serial('id').primaryKey(),
  name: text().notNull(),
  age: integer().notNull(),
  blood_type: blood_type_enum(),
  school_degree: text(),
  certificate: text(),
  national_id: integer(),
  year: text(),
  created_at: timestamp({ withTimezone: true }).defaultNow(),
  updated_at: timestamp({ withTimezone: true }).defaultNow(),
});

// ================================= relations ===================================

export const student_relations = relations(students, ({ many }) => ({
  results: many(results),
}));
export const curriculum_relations = relations(curriculums, ({ many }) => ({
  results: many(results),
}));

export type User = typeof users.$inferSelect;
