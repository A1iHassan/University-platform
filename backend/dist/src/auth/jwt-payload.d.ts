export interface JwtPayload {
    sub: string;
    uni_number: string;
    role: 'student' | 'instructor' | 'admin';
}
