import { JwtService } from '@nestjs/jwt';
import { type Db } from "../db/db.module";
import { loginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly db;
    private readonly jwt;
    private readonly logger;
    constructor(db: Db, jwt: JwtService);
    login(dto: loginDto): Promise<{
        user: {
            id: string;
            uni_number: string;
            role: "student" | "admin";
        };
        access_token: string;
        refresh_token: string;
    }>;
    refresh(refreshToken: string): Promise<{
        user: {
            id: string;
            uni_number: string;
            role: "student" | "admin";
        };
        access_token: string;
        refresh_token: string;
    }>;
    me(userId: string): Promise<{
        id: string;
        uni_number: string;
        role: "student" | "admin";
    }>;
    private issueToken;
    private toPublicUser;
}
