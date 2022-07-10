import "reflect-metadata"
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'
import './shared/container'
import { userRouter } from './routes/User.routes';
import { createConnection } from "./infra/database";
import { handleGlobalError } from "./errors/handleGlobalError";

createConnection()

const app = express()
app.use(express.json());
app.use(userRouter);
app.use(handleGlobalError)
   
  
app.listen(3000, ()=>console.log('server run'))