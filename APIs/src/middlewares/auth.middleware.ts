import { Injectable, NestMiddleware } from "@nestjs/common";

import "dotenv/config";
import { verifyToken } from "../libs/utils/jwt";
import { JWT_TOKEN } from "../configs/app.config";
import { UnauthorizedErrorException } from "../exceptions/exceptions";
import { IUser } from "../decorators";

export interface UserRequest extends Request {
  user: IUser;
}
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor() {}
  async use(req: UserRequest, res: Response, next: () => void): Promise<any> {
    const token = req.headers["x-access-token"];

    if (token) {
      // TODO: calling to auth service
      const jwtRes = await verifyToken(token, JWT_TOKEN);

      if (!jwtRes.success)
        throw new UnauthorizedErrorException(
          "Please log in again to implement new and improved security measures."
        );

      req.user = {
        ...(jwtRes.data as IUser),
      };
    }

    next();
  }
}
