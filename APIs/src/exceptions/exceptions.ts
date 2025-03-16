import { HttpStatus } from '@nestjs/common';
import {
  ARGUMENT_INVALID,
  ARGUMENT_NOT_PROVIDED,
  ARGUMENT_OUT_OF_RANGE,
  CONFLICT,
  FORBIDDEN,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  UNAUTHORIZED,
  UNPROCESSABLE_ENTITY,
} from '.';
import { ExceptionBase } from './exception.base';

/**
 * Used to indicate that an incorrect argument was provided to a method/function/class constructor
 *
 * @class ArgumentInvalidException
 * @extends {ExceptionBase}
 */
export class ArgumentInvalidException extends ExceptionBase {
  static readonly message: string = 'Argument invalid';

  constructor(message = NotFoundException.message) {
    super(message);
    this.statusCode = HttpStatus.BAD_REQUEST;
  }

  readonly errorCode: string = ARGUMENT_INVALID;
  readonly httpStatus = HttpStatus.BAD_REQUEST;
}

/**
 * Used to indicate that an incorrect argument was provided to a DTO/class validator
 *
 * @class UnprocessableEntityException
 * @extends {ExceptionBase}
 */
export class UnprocessableEntityException extends ExceptionBase {
  static readonly message: string = 'Validation failed';

  constructor(message = NotFoundException.message) {
    super(message);
    this.statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
  }

  readonly errorCode: string = UNPROCESSABLE_ENTITY;
  readonly httpStatus = HttpStatus.UNPROCESSABLE_ENTITY;
}

/**
 * Used to indicate that an argument was not provided (is empty object/array, null of undefined).
 *
 * @class ArgumentNotProvidedException
 * @extends {ExceptionBase}
 */
export class ArgumentNotProvidedException extends ExceptionBase {
  readonly errorCode = ARGUMENT_NOT_PROVIDED;
  readonly httpStatus = HttpStatus.BAD_REQUEST;
}

/**
 * Used to indicate that an argument is out of allowed range
 * (for example: incorrect string/array length, number not in allowed min/max range etc)
 *
 * @class ArgumentOutOfRangeException
 * @extends {ExceptionBase}
 */
export class ArgumentOutOfRangeException extends ExceptionBase {
  readonly errorCode = ARGUMENT_OUT_OF_RANGE;
  readonly httpStatus = HttpStatus.BAD_REQUEST;
}

/**
 * Used to indicate conflicting entities (usually in the database)
 *
 * @class ConflictException
 * @extends {ExceptionBase}
 */
export class ConflictException extends ExceptionBase {
  readonly httpStatus = HttpStatus.BAD_REQUEST;
  readonly errorCode: string = CONFLICT;
}

/**
 * Used to indicate that entity is not found
 *
 * @class NotFoundException
 * @extends {ExceptionBase}
 */
export class NotFoundException extends ExceptionBase {
  static readonly message: string = 'Not found';
  readonly httpStatus = HttpStatus.NOT_FOUND;

  constructor(message = NotFoundException.message) {
    super(message);
    this.statusCode = HttpStatus.NOT_FOUND;
  }

  readonly errorCode: string = NOT_FOUND;
}

/**
 * Used to indicate that entity is not found
 *
 * @class NotFoundException
 * @extends {ExceptionBase}
 */
export class InternalServerErrorException extends ExceptionBase {
  readonly httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
  static readonly message = 'Internal server error';

  constructor(message = InternalServerErrorException.message) {
    super(message);
  }

  readonly errorCode = INTERNAL_SERVER_ERROR;
}

/**
 * Used to indicate that entity is not found
 *
 * @class NotFoundException
 * @extends {ExceptionBase}
 */
export class UnauthorizedErrorException extends ExceptionBase {
  static readonly message = 'Unauthorized';
  readonly httpStatus = HttpStatus.UNAUTHORIZED;

  constructor(message = InternalServerErrorException.message) {
    super(message);
  }

  readonly errorCode = UNAUTHORIZED;
}

/**
 * Used to indicate that FORBIDDEN
 *
 * @class Forbidden
 * @extends {ExceptionBase}
 */
export class Forbidden extends ExceptionBase {
  static readonly message: string = 'Forbiden';
  readonly httpStatus = HttpStatus.FORBIDDEN;

  constructor(message = Forbidden.message) {
    super(message);
    this.statusCode = HttpStatus.FORBIDDEN;
  }

  readonly errorCode: string = FORBIDDEN;
}

/**
 * Used to indicate the http exception
 *
 * @class UnknownException
 * @extends {ExceptionBase}
 */
export class HttpException extends ExceptionBase {
  readonly httpStatus: number;
  readonly errorCode: string;

  constructor(message: string, error_code: string, status_code: number) {
    super(message);
    this.httpStatus = status_code;
    this.errorCode = error_code;
  }
}
