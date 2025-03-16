import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UnauthorizedErrorException } from "../exceptions/exceptions";
import { Types } from "mongoose";
import { IsMongoId } from "class-validator";

export interface IUser {
  readonly _id: Types.ObjectId;
  readonly email: string;
  readonly created_at: string | Date;
  readonly updated_at: string | Date;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly full_name?: string;
  readonly google_id?: string;
}

class User {
  _id: string;

  email: string;

  google_id: string;

  first_name: string;

  last_name: string;

  full_name: string;

  constructor(user: IUser) {
    Object.assign(this, user);
  }
}

export const CurrentUser = createParamDecorator(
  async (_: any, ctx: ExecutionContext): Promise<IUser> => {
    const request = ctx.switchToHttp().getRequest();

    const user = new User(request.user);

    if (!user._id) {
      throw new UnauthorizedErrorException(
        "Please log in again to implement new and improved security measures."
      );
    }

    return request.user;
  }
);
