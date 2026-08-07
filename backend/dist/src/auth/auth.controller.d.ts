import { Request } from 'express';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { JwtPayload } from './jwt-payload';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: loginDto): Promise<{
        user: {
            id: string;
            uni_number: string;
            role: "student" | "admin";
        };
        access_token: string;
        refresh_token: string;
    }>;
    refresh(auth: string): Promise<{
        user: {
            id: string;
            uni_number: string;
            role: "student" | "admin";
        };
        access_token: string;
        refresh_token: string;
    }>;
    me(req: Request & {
        user: JwtPayload;
    }): Promise<{
        id: string;
        uni_number: string;
        role: "student" | "admin";
    }>;
}
