/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ErrorHandlingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if(!req.body.name || !req.body.email || !req.body.password) {
      res.status(400).json({
        statusCode: 400,
        message: 'Bad Request',
        error: 'Validation Error',
      });
      next();
    }else if(req.body.password.length < 6) {
      res.status(400).json({
        statusCode: 400,
        message: 'Bad Request',
        error: 'Password must be at least 6 characters long',
      });
      next();
    } else {
      res.status(200).json({
        statusCode: 200,
        message: 'Success',
        data: req.body,
      });
      next();
    }
  }
}
