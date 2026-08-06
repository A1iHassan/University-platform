"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../../config");
class JwtAuthGuard {
    jwt;
    constructor(jwt) {
        this.jwt = jwt;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authorization = request.headers.authorization;
        const [type, token] = authorization?.split(' ') ?? [];
        if (type !== 'Bearer' || !token)
            throw new common_1.UnauthorizedException('Missing bearer token');
        try {
            ;
            request.user = await this.jwt.verifyAsync(token, { secret: config_1.config.jwtAccessSecret });
        }
        catch {
            throw new common_1.UnauthorizedException('invalid or expired token');
        }
        return true;
    }
}
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt-auth.guard.js.map