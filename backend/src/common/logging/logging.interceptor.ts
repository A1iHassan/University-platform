import type { Request, Response } from 'express';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const req = context.switchToHttp().getRequest<Request>();
    const { method, originalUrl } = req;
    const start = Date.now();

    return next.handle().pipe(
      tap(() => {
        const status = context
          .switchToHttp()
          .getResponse<Response>().statusCode;
        this.logger.log(
          `${method} ${originalUrl} ${status} ${Date.now() - start}ms`,
        );
      }),
    );
  }
}
