
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../types/index.js';

const globalError: ErrorRequestHandler = (
  
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


  if (process.env.NODE_ENV === 'development') {
    response.stack = err.stack;
    response.error = err;
  }
  res.status(statusCode).json(response);
};

export default globalError;
