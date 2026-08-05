import { DbService } from './db.service';
import { CreateDbDto } from './dto/create-db.dto';
import { UpdateDbDto } from './dto/update-db.dto';
export declare class DbController {
    private readonly dbService;
    constructor(dbService: DbService);
    create(createDbDto: CreateDbDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDbDto: UpdateDbDto): string;
    remove(id: string): string;
}
