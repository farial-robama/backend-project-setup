/* eslint-disable prefer-const */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
// import { Prisma } from "@prisma/client";
// import { STATUS_CODES } from "http";
import { ErrorResponse } from '../types/index.js';

const globalError: ErrorRequestHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';



  const response: ErrorResponse = {
    success: false,
    message,
  };

  //   only for development environment, include stack and error details
  if (process.env.NODE_ENV === 'development') {
    response.stack = err.stack;
    response.error = err;
  }
  res.status(statusCode).json(response);
};

export default globalError;
