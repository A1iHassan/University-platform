import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from "./schema";
export declare const DRIZZLE = "DRIZZLE";
export type Db = NodePgDatabase<typeof schema>;
export declare class DbModule {
}
