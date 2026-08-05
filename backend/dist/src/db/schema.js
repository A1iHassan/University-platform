"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.roleEnum = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.roleEnum = (0, pg_core_1.pgEnum)('role', ['student', 'admin']);
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.uuid)('id').primaryKey().defaultRandom(),
    uniNumber: (0, pg_core_1.text)('uni_number').notNull().unique(),
    password: (0, pg_core_1.text)('password').notNull(),
    role: (0, exports.roleEnum)('role').notNull().default('student'),
});
//# sourceMappingURL=schema.js.map