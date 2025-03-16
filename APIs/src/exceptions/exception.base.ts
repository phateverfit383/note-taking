import { HttpStatus } from "@nestjs/common";
import { RequestContextService } from "../context";

export interface SerializedException {
  message: string;
  httpStatus: HttpStatus;
  errorCode: string;
  requestId: string;
  stack?: string;
  cause?: string;
  metadata?: unknown;
  /**
   * ^ Consider adding optional `metadata` object to
   * exceptions (if language doesn't support anything
   * similar by default) and pass some useful technical
   * information about the exception when throwing.
   * This will make debugging easier.
   */
}

/**
 * Base class for custom exceptions.
 *
 * @abstract
 * @class ExceptionBase
 * @extends {Error}
 */
export abstract class ExceptionBase extends Error {
  abstract errorCode: string;
  abstract httpStatus: HttpStatus;
  public readonly requestId: string;
  public statusCode: HttpStatus;

  /**
   * @param {string} message
   * @param {ObjectLiteral} [metadata={}]
   * **BE CAREFUL** not to include sensitive info in 'metadata'
   * to prevent leaks since all exception's data will end up
   * in application's log files. Only include non-sensitive
   * info that may help with debugging.
   */
  constructor(
    override readonly message: string,
    readonly cause?: Error,
    readonly metadata?: unknown
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    const ctx = RequestContextService.getContext();
    this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    this.requestId = ctx.requestId;
  }

  /**
   * By default in NodeJS Error objects are not
   * serialized properly when sending plain objects
   * to external processes. This method is a workaround.
   * Keep in mind not to return a stack trace to user when in production.
   * https://iaincollins.medium.com/error-handling-in-javascript-a6172ccdf9af
   */
  toJSON(): SerializedException {
    return {
      message: this.message,
      httpStatus: this.httpStatus,
      errorCode: this.errorCode,
      stack: this.stack,
      requestId: this.requestId,
      cause: JSON.stringify(this.cause),
      metadata: this.metadata,
    };
  }
}
