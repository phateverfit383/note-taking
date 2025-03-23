import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';

import 'dotenv/config';
import { verifyToken } from '../helper/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor() {}
  async use(req: Request, res: Response, next: () => void): Promise<any> {
    const token = req.headers['x-access-token'];

    if (token) {
      const jwtRes = await verifyToken(token);
      if (!jwtRes.success)
        throw new UnauthorizedException(
          '[AuthMiddleware] Please log in again to implement new and improved security measures.',
        );

      req['user'] = {
        ...(jwtRes.data as any),
      };
    }

    next();
  }
}
