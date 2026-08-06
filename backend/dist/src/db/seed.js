"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
const bcrypt = __importStar(require("bcryptjs"));
const schema = __importStar(require("./schema"));
const common_1 = require("@nestjs/common");
const config_1 = require("../../config");
const logger = new common_1.Logger('seed');
async function main() {
    const db = (0, node_postgres_1.drizzle)(new pg_1.Pool({ connectionString: config_1.config.databaseUrl }), {
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
    logger.log(user
        ? `Seeded user ${user.uni_number} (${user.role})`
        : `User ${uni_number} already exists`);
    process.exit(0);
}
void main();
//# sourceMappingURL=seed.js.map