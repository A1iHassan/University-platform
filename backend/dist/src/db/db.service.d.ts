import { CreateDbDto } from './dto/create-db.dto';
import { UpdateDbDto } from './dto/update-db.dto';
export declare class DbService {
    create(createDbDto: CreateDbDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDbDto: UpdateDbDto): string;
    remove(id: number): string;
}
