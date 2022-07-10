import "reflect-metadata"
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'
import { userRouter } from './routes/User.routes';
import { createConnection } from "./infra/database";
import { AppError } from "./errors/AppErrors";

import './shared/container'
createConnection()

const app = express()
app.use(express.json());
app.use(userRouter);
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      console.log(err, 'kkk')
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          message: err.message,
        });
      }
      return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
      });
    });
  
app.listen(3000, ()=>console.log('server run'))