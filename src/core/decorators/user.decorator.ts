import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { validate, IsDefined, IsMongoId, IsString, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export interface IUser {
  readonly id: Types.ObjectId;
  readonly email: string;
  readonly first_name?: string;
  readonly last_name?: string;
}

class User {
  @IsDefined()
  @IsMongoId()
  id: string;

  @IsOptional()
  @IsString()
  first_name: string;

  @IsOptional()
  @IsString()
  last_name: string;

  constructor(user: IUser) {
    Object.assign(this, user);
  }
}

export const CurrentUser = createParamDecorator(async (_: any, ctx: ExecutionContext): Promise<IUser> => {
  const request = ctx.switchToHttp().getRequest();

  const user = new User(request.user);

  const errors = await validate(user);
  if (errors.length > 0) {
    throw new UnauthorizedException(
      '[CurrentUser] Please log in again to implement new and improved security measures.',
    );
  }

  return request.user;
});
