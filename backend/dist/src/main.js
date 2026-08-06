"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const logging_interceptor_1 = require("./common/logging/logging.interceptor");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    logger.log(`Application is running on: http://localhost:${port}`);
}
bootstrap().catch((err) => {
    new common_1.Logger('Bootstrap').fatal('Application failed to start', err.stack);
    process.exit(1);
});
//# sourceMappingURL=main.js.map